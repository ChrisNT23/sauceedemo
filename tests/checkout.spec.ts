import { test, expect } from '@playwright/test';

test.describe('Flujo de compra SauceDemo (E2E)', () => {
  test('debe completar el flujo de compra satisfactoriamente', async ({ page }) => {
    // 1. Ir a la página de inicio
    await page.goto('/');

    // 2. Autenticarse con el usuario proporcionado
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');

    // Verificar que inició sesión correctamente
    await expect(page.locator('.title')).toHaveText('Products');

    // 3. Agregar dos productos al carrito
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');

    // 4. Visualizar el carrito
    await page.click('.shopping_cart_link');

    // Verificar que estamos en el carrito y hay 2 items
    await expect(page.locator('.title')).toHaveText('Your Cart');
    await expect(page.locator('.cart_item')).toHaveCount(2);

    // 5. Completar el formulario de compra
    await page.click('[data-test="checkout"]');

    await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
    await page.fill('[data-test="firstName"]', 'Juan');
    await page.fill('[data-test="lastName"]', 'Perez');
    await page.fill('[data-test="postalCode"]', '12345');
    await page.click('[data-test="continue"]');

    // Verificar pantalla de Overview
    await expect(page.locator('.title')).toHaveText('Checkout: Overview');

    // 6. Finalizar la compra hasta la confirmación
    await page.click('[data-test="finish"]');

    // Validar mensaje: "THANK YOU FOR YOUR ORDER" (saucedemo muestra "Thank you for your order!")
    await expect(page.locator('.title')).toHaveText('Checkout: Complete!');
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });
});
