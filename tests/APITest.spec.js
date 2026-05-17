 const {test, expect} = require('@playwright/test');
 const loginData = require('../loginData.json');


 test('API Test', async ({ page }) => {
    
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(loginData.userEmail);
    await page.locator("#userPassword").fill(loginData.userPassword);
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    const token = await page.evaluate(() => window.localStorage.getItem('token'));
    console.log(token);

    
 })
 