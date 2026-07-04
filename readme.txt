Instrucciones de Ejecución - Prueba E2E SauceDemo

Requisitos previos:
- Node.js instalado en el sistema.

Pasos para ejecutar:
1. Abrir una terminal en esta carpeta (saucedemo).
2. Instalar las dependencias del proyecto ejecutando:
   npm install
3. Instalar los navegadores de Playwright:
   npx playwright install
4. Ejecutar las pruebas automatizadas (modo headless):
   npx playwright test
5. (Opcional) Si deseas ver la ejecución de la prueba visualmente:
   npx playwright test --ui
6. Para ver el reporte HTML generado al finalizar la prueba:
   npx playwright show-report
