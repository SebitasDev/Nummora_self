import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { SelfBackendVerifier, AllIds, DefaultConfigStore } from '@selfxyz/core';

const PORT = Number(process.env.PORT || 8080);
const SCOPE = (process.env.SELF_SCOPE || 'nummora-front').trim();
const ENDPOINT = (process.env.SELF_ENDPOINT || 'https://673db36e43c3.ngrok-free.app/api/verify-self').replace(/\/+$/, '');
const MOCK = String(process.env.SELF_MOCK_PASSPORT || 'true').toLowerCase() === 'true';
const USER_ID_TYPE = (process.env.SELF_USER_ID_TYPE === 'uuid') ? 'uuid' : 'hex';
const ALLOW_ORIGIN = process.env.CORS_ORIGIN || '*';

const app = express();
app.use(express.json({ limit: '2mb' }));
app.use(cors({ origin: ALLOW_ORIGIN }));

const verificationConfig = {
  excludedCountries: [],
  ofac: false,
  minimumAge: 18,
};
const configStore = new DefaultConfigStore(verificationConfig);

const verifier = new SelfBackendVerifier(
  SCOPE,
  ENDPOINT,
  false,
  AllIds,
  configStore,
  'hex'
);

const sessions = new Map();

function safeParseJSON(v) { try { return JSON.parse(v); } catch { return undefined; } }
function strip0x(x) { return (typeof x === 'string') ? x.replace(/^0x/i, '') : ''; }
function hexToUtf8(hex) {
  const clean = strip0x(hex);
  if (!clean) return '';
  const buf = Buffer.from(clean, 'hex');
  return buf.toString('utf8').replace(/\0+$/, '');
}

function extractSidFromContext(userContextData) {
  try {
    const clean = strip0x(String(userContextData || ''));
    if (clean.length < 128) return undefined;
    const userDefinedHex = clean.slice(-128);
    const decoded = hexToUtf8(userDefinedHex);
    const obj = safeParseJSON(decoded);
    return obj?.sessionId;
  } catch {
    return undefined;
  }
}

app.get('/health', (_req, res) => {
  res.json({
    ok: true,
    scope: SCOPE,
    endpoint: ENDPOINT,
    mockDocs: MOCK,
    userIdType: USER_ID_TYPE,
    now: Date.now()
  });
});

app.get('/api/status/:sid', (req, res) => {
  const sid = req.params.sid;
  const state = sessions.get(sid);
  if (!state) return res.json({ status: 'pending' });
  return res.json(state);
});

app.post('/api/verify-self', async (req, res) => {
  try {
    const body = req.body || {};
    const { attestationId, proof, publicSignals, userContextData } = body;

    const sidFromQuery = typeof req.query?.sid === 'string' ? req.query.sid : undefined;

    let sid = sidFromQuery || extractSidFromContext(userContextData);

    const afterVerifySid = async (result) => {
      if (!sid) {
        const udfHex = result?.userData?.userDefinedData;
        if (udfHex) {
          const decoded = hexToUtf8(udfHex);
          const parsed = safeParseJSON(decoded);
          if (parsed?.sessionId) sid = parsed.sessionId;
        }
      }
    };

    if (attestationId === undefined) {
      const payload = {
        status: 'error',
        result: false,
        verified: false,
        reason: 'missing attestationId',
        updatedAt: Date.now()
      };
      if (sid) sessions.set(sid, payload);
      return res.status(400).json(payload);
    }

    const result = await verifier.verify(attestationId, proof, publicSignals, userContextData);
    await afterVerifySid(result);

    const isValid = !!(result?.isValidDetails?.isValid);
    const payload = {
      status: isValid ? 'success' : 'error',
      result: isValid,
      verified: isValid,
      disclose: result?.discloseOutput ?? null,
      user: result?.userData ?? null,
      isValidDetails: result?.isValidDetails ?? null,
      updatedAt: Date.now()
    };

    if (sid) {
      sessions.set(sid, payload);
    } else {
      console.warn('[SELF] Verificado pero sin sessionId en contexto. Revisar QR (query ?sid) / userDefinedData.');
    }

    if (isValid) {
      console.log('[SELF] ✅ Verificación ok', { attestationId, sid, nullifier: result?.discloseOutput?.nullifier });
      return res.json(payload);
    } else {
      console.log('[SELF] ❌ Verificación fallida', { attestationId, sid });
      return res.status(400).json(payload);
    }
  } catch (err) {
    console.error('Verification error:', err);

    try {
      const sid = typeof req.query?.sid === 'string' ? req.query.sid : extractSidFromContext(req.body?.userContextData);
      if (sid) {
        sessions.set(sid, {
          status: 'error',
          result: false,
          verified: false,
          reason: 'InternalError',
          updatedAt: Date.now()
        });
      }
    } catch {}

    return res.status(500).json({
      status: 'error',
      result: false,
      verified: false,
      reason: 'InternalError'
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend Self corriendo en http://localhost:${PORT}`);
  console.log(`   CORS origin: ${ALLOW_ORIGIN}`);
  console.log(`   Scope: ${SCOPE}`);
  console.log(`   Endpoint de callback (DEBE ser público): ${ENDPOINT}`);
  console.log('   Endpoints:');
  console.log('     GET  /health');
  console.log('     GET  /api/status/:sid');
  console.log('     POST /api/verify-self  (callback de la app de Self)');
});
