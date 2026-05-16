// @ts-check
import { test, expect } from '@playwright/test';

test('UI Controls', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  const username = page.getByLabel('Username');
  const password = page.getByLabel('Password');
  const signInButton = page.getByRole('button', { name: 'Sign In' });
  const userRadio = page.getByLabel('User', { exact: true });
  const adminRadio = page.getByLabel('Admin', { exact: true });
  const dropdownOptions = page.locator('select.form-control')
  // await dropdownOptions.getByText('Instructor').click();
  //  await expect(dropdown).toHaveText('Instructor');
   const radioButtons = page.locator('.form-check-label');


  await expect(username).toBeVisible();
  await expect(password).toBeVisible();
  await expect(signInButton).toBeVisible(); 
  await expect(userRadio).toBeVisible();
  await expect(adminRadio).toBeVisible();
  await expect(dropdownOptions).toBeVisible();


});


