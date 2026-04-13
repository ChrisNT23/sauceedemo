import { test, expect } from '@playwright/test';

test.describe('SauceDemo Product Sorting', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/collections/all');
  });

  test('should sort products by price: low to high', async ({ page }) => {
    await page.goto('/collections/all?sort_by=price-ascending');

    await page.waitForSelector('a.animated.fadeInUpBig');

    const priceElements = await page.locator('a.animated.fadeInUpBig h4').allTextContents();
    
    const prices = priceElements.map(p => parseFloat(p.replace(/[^0-9.]/g, '')));

    for (let i = 0; i < prices.length - 1; i++) {
      expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
    }
  });

  test('should sort products by price: high to low', async ({ page }) => {
    await page.goto('/collections/all?sort_by=price-descending');

    await page.waitForSelector('a.animated.fadeInUpBig');

    const priceElements = await page.locator('a.animated.fadeInUpBig h4').allTextContents();
    
    const prices = priceElements.map(p => parseFloat(p.replace(/[^0-9.]/g, '')));

    for (let i = 0; i < prices.length - 1; i++) {
      expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
    }
  });

  test('should verify default sorting is alphabetical', async ({ page }) => {
    await page.goto('/collections/all');

    const titleElements = await page.locator('a.animated.fadeInUpBig h3').allTextContents();
    
    const titles = titleElements.map(t => t.trim().toLowerCase());

    for (let i = 0; i < titles.length - 1; i++) {
      expect(titles[i] <= titles[i + 1]).toBeTruthy();
    }
  });

});

