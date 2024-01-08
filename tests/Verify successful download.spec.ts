import { test, expect } from '@playwright/test';

const searchbar = '//input[@type="search"]';
const searchResult = '/html/body/div[2]/div/div[2]/main/div/div/div[1]/div/div/div[2]/div/div/div[1]/div/div[1]/span[3]';
const searchTitle = '//h3[@class="meta__title meta__title__margin"]/a[@class="visitable"]/span[@class="hlFld-Title"]';
const downloadButton = '//a[@href="/doi/pdf/10.1002/cpe.5878"]';  
const ISSN = "1532-0626";
const expectedTitle = "Wiley Online Library | Scientific research articles, journals, books, and reference works";
const productName = 'Issue Information';

test('Verify successful download of document on Wiley.com', async ({ page }) => {
    
  // Navigate to the Wiley's home page
  await page.goto('https://onlinelibrary.wiley.com/', { timeout: 60000 });
  await expect(page).toHaveTitle(expectedTitle, { timeout: 10000 });

  // Locate the search bar and search by ISSN
  await page.locator(searchbar).pressSequentially(ISSN);

  // Press the "Enter" key
  await page.keyboard.press('Enter');

  // Verify the search result
  await expect(page.locator(searchResult)).toHaveText('"${ISSN}" anywhere', { timeout: 30000 });

  // Verify the search book name
  await expect(page.locator(searchTitle).first()).toHaveText(productName, { timeout: 30000 });

  // Click the download button
  await page.click(downloadButton);

});
