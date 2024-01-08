import { test, expect } from '@playwright/test';


const searchbar='//input[@type="search"]';
const searchResult = '/html/body/div[2]/div/div[2]/main/div/div/div[1]/div/div/div[2]/div/div/div[1]/div/div[1]/span[3]';
const searchTitle = '//h3[@class="meta__title meta__title__margin"]/a[@class="visitable"]/span[@class="hlFld-Title"]';


const ISBN = "9781444391602"; 
const productName = 'Issues in Finance';

test('Verify the product search functionality of Wiley.com', async ({ page }) => {

   // Navigate to the Wiley's home page
  await page.goto('https://onlinelibrary.wiley.com/',{timeout: 60000});
  await expect(page).toHaveTitle("Wiley Online Library | Scientific research articles, journals, books, and reference works", {timeout: 10000});

  //Locate the search bar and search ISBN
  await page.locator(searchbar).pressSequentially(ISBN);

  //Press the "Enter" key
  await page.keyboard.press('Enter');

  //Verify the search result
  await expect(page.locator(searchResult)).toHaveText('"${ISBN}" anywhere',{timeout: 30000});

  //Verify the search book name
  await expect(page.locator(searchTitle).first()).toHaveText(productName,{timeout: 30000});

});

