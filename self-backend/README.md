# 🧩 Self Backend – Nummora

Este repositorio contiene el **backend de integración con Self Protocol** para el proyecto **Nummora**.  
El objetivo es permitir la **verificación de identidad descentralizada** de los usuarios dentro de la aplicación.

---

## 📖 ¿Qué es Self Protocol?

[Self Protocol](https://selfchain.xyz/) es un protocolo de **identidad descentralizada (DID)** que permite a los usuarios verificar su identidad mediante claims (pruebas criptográficas) sin depender de intermediarios centralizados.  

En Nummora, Self se integra para que:
- Los usuarios puedan **verificarse** de manera sencilla y segura.
- El sistema valide la autenticidad de cada usuario antes de habilitar ciertas acciones.
- La verificación se refleje tanto en el frontend como en el backend.

---

## ⚙️ ¿Qué hace este backend?

- Expone un **endpoint** que el frontend consume para iniciar/verificar identidades con Self.
- Usa las credenciales de la aplicación en Self (`SELF_APP_ID` y `SELF_APP_SECRET`) para comunicarse con la API de Self.
- Devuelve al frontend el resultado de la verificación (`ok / error`) junto con los datos relevantes del usuario.
- Está deployado en **Render**, lo que permite conectarlo fácilmente con el frontend en **Vercel**.

---

## 🛠️ Stack utilizado

- **Node.js + Express** → servidor backend.
- **Self Protocol SDK/API** → integración con Self.
- **Render** → despliegue del backend.
- **Vercel** → despliegue del frontend (consume este backend).
- **.env** → configuración con credenciales seguras.

---

## 🚀 Cómo lo integré en Nummora

1. **Creación del backend**  
   - Generé un proyecto Node.js con Express.  
   - Preparé un endpoint (`/verify`) que se conecta a Self usando las credenciales.  
   - Configuré el archivo `.env` con las variables necesarias.

2. **Deploy en Render**  
   - Subí el repo `self-backend` a GitHub.  
   - Lo conecté con Render.  
   - Agregué las variables de entorno (`SELF_APP_ID`, `SELF_APP_SECRET`, `SELF_ENDPOINT`).  
   - Render genera automáticamente la URL pública del backend.

3. **Conexión con el frontend**  
   - En el `.env.local` del frontend (deployado en Vercel) configuré la variable:
     ```env
     SELF_ENDPOINT=https://self-backend.onrender.com
     ```
   - Desde el frontend consumí el endpoint y mostré el estado de la verificación con los componentes:
     - `<SelfVerificationButton />`
     - `<SelfVerificationStatus />`

4. **Resultado final**  
   - Los usuarios pueden iniciar la verificación con Self.  
   - El backend procesa la solicitud.  
   - El frontend refleja el resultado de forma visual y clara.  

---

## ✅ Conclusión

La integración de **Self en Nummora** asegura que los usuarios tengan un **método de verificación descentralizado, confiable y seguro**.  
El flujo completo conecta:
- **Frontend (Vercel)** → UI de verificación.  
- **Backend (Render)** → conexión con Self Protocol.  
- **Self Protocol** → servicio descentralizado de identidad.  

De esta manera, Nummora incorpora un sistema de identidad robusto alineado con los principios Web3.
