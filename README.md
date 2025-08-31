# 📦 Dependencias utilizadas en el proyecto Nummora

Este proyecto está construido con **Next.js 15 (App Router)** y React 18.3.1. A continuación, se documentan las librerías principales utilizadas, organizadas por funcionalidad.

---

## ⚛️ Core y UI

### `next` / `react` / `react-dom`
- Base del proyecto: React 18 + Next.js 15 (con App Router).
- Soporte completo para SSR, rutas por archivo y componentes server/client.

### `@mui/material` / `@mui/icons-material` / `@emotion/react` / `@emotion/styled` / `@emotion/server`
- **Material UI** (MUI) como sistema de diseño y componentes base.
- Emotion se usa como motor de estilos (styling engine).
- `@emotion/server` asegura estilos correctamente renderizados en SSR.

---

## 🧠 Formulario y validación

### `react-hook-form`
- Manejo de formularios con validación, control y performance eficiente.
- Integración directa con hooks de React.

### `zod`
- Validación de esquemas fuertemente tipada (TypeScript-first).
- Permite validar formularios, respuestas de API, objetos y más.

### `@hookform/resolvers`
- Conector entre `react-hook-form` y `zod` para validación de formularios en un solo paso.

---

## 🌐 Web3

### `wagmi`
- Librería moderna de hooks para interacción con wallets y contratos.
- Maneja conexión, redes, firma, lectura y escritura de contratos.

### `viem`
- Cliente Ethereum modular y funcional usado por wagmi.
- Tipado seguro, ultra rápido, sin necesidad de Typechain.

### `@wagmi/cli`
- CLI para generar tipos automáticamente desde ABIs para uso con viem + wagmi.
- Asegura autocompletado y validación en llamadas a smart contracts.

---

## 🌍 Networking y datos

### `@tanstack/react-query`
- Manejo de datos asíncronos: fetch, caché, revalidación y estado.
- Ideal para consumir datos de APIs (REST o The Graph).
- Compatible con server components y SSR.

---

## 🧠 State management

### `zustand`
- Estado global simple, reactivo y sin boilerplate.
- Útil para estados como sesión, UI, flags de conexión, etc.

---

## 🛠️ Dev y Tooling

### `typescript`
- Tipado estático para todo el código base del proyecto.

### `husky`
- Permite ejecutar hooks de Git (ej. lint, test) antes de commits o pushes.

### `@types/*`
- Tipos TypeScript para dependencias usadas (`react`, `node`, etc.).

---

## 🚀 Stack principal (recomendado)

- **Next.js 15** con App Router
- **MUI + Emotion** como sistema de diseño
- **React Hook Form + Zod** para formularios
- **wagmi + viem + RainbowKit (opcional)** para Web3
- **React Query + Zustand** para manejo de datos y estado

---

## 📁 Estructura recomendada

Este proyecto sigue una estructura basada en **Atomic Design** + **Screaming Architecture** para mantener escalabilidad y claridad:

