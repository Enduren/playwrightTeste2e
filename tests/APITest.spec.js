 const {test, expect} = require('@playwright/test');
 const loginData = require('../loginData.json');


 test('API Test', async ({ page }) => {
    
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(loginData.apiUsername);
    await page.locator("#userPassword").fill(loginData.apiPassword);
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    const token = await page.evaluate(() => window.localStorage.getItem('token'));
    console.log("Here's your token: " + token);

    
 })
 