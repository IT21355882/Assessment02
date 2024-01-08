import { test, expect } from '@playwright/test';

const loginIcon = '//*[@id="pb-page-content"]/div/div[1]/header/div/div[2]/div/div/div/div[2]/div/div[2]/div/div/a/span[1]//';//span[@class="sign-in-label"]';
const Email = '//input[@id="username"]';
const Password = '//input[@id="password"]';
const button = '//input[@type="submit"]';

const email = 'hirunichamodya27@gmail.com';
const password = 'Hiruni@27';


test('Verify successful user login on Wiley.com', async ({ page }) => {

    //Navigate to login page
    await page.goto('https://onlinelibrary.wiley.com/',{timeout: 60000});

    //click login icon
    await page.click(loginIcon);

    //Click the label
    await page.click(Email);

    await page.fill(Email,email);
    
    //Click the label
    await page.click(Password);

    await page.fill(Password,password);

    //click the login button
    await page.click(button);
    
});
