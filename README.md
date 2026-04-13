# SauceDemo Playwright Automation

Este proyecto contiene una suite de pruebas automatizadas con Playwright para verificar la funcionalidad de ordenamiento de productos en la tienda SauceDemo Shopify.

## Requisitos

- Node.js instalado (v16+)
- npm instalado

## Instalación

1.  Instala las dependencias:
    ```bash
    npm install
    ```

2.  Instala los navegadores de Playwright:
    ```bash
    npx playwright install chromium
    ```

## Ejecución de Pruebas

Para ejecutar las pruebas en modo "headless" (sin interfaz gráfica):
```bash
npm test
```

Para ejecutar las pruebas con el visor de UI de Playwright:
```bash
npx playwright test --ui
```

## Pruebas Incluidas

- **Ordenamiento por Precio (Menor a Mayor):** Verifica que los productos se ordenen correctamente del más económico al más caro usando el parámetro `?sort_by=price-ascending`.
- **Ordenamiento por Precio (Mayor a Menor):** Verifica que se ordenen del más caro al más barato usando `?sort_by=price-descending`.
- **Verificación de Orden Alfabético:** Confirma que el orden por defecto de la plataforma es alfabético.

## Notas Técnicas

Dado que la plataforma actualmente no cuenta con un menú desplegable de ordenamiento en la interfaz gráfica, la automatización demuestra cómo el backend de Shopify ya procesa estos parámetros, lo que facilita la futura implementación del elemento de UI correspondiente.
