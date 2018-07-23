const puppeteer = require('puppeteer')


const scrapeBBC = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitFor(2500);


    const result = await page.evaluate(() => {
    const name = document.querySelector('.recipe-header__title').innerText
    const details = document.querySelector('.recipe-header__details-second').innerText
    const description = document.querySelector('.field-items').innerText
    const nutrition = document.querySelector('.recipe-header__nutrition').innerText
    const method = document.querySelector('.method__list').innerText
    const ingredients = document.getElementById('recipe-ingredients').innerText

    return { name, details, description, nutrition, method, ingredients}
  })

  await browser.close();
  return result

}

const scrapeFoodNewtork = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitFor(2500);

    const result = await page.evaluate(() => {
    const name = document.querySelector('.o-AssetTitle__a-HeadlineText').innerText
    const details = document.querySelector('.parbase .recipeInfo').innerText
    const method = document.querySelector('.o-Method__m-Body').innerText
    const ingredients = document.querySelector('.o-Ingredients').innerText

    return { name, details, method, ingredients}
  })

  await browser.close();
  return result
}


const scrapeAllRecipes = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitFor(2500);

    const result = await page.evaluate(() => {
    const name = document.querySelector('.recipe-summary__h1').innerText
    const method = document.querySelector('.directions--section__steps').innerText

    // const nutrition = document.querySelector('.nutrition-summary-facts').innerText

    // return { name, details, method, ingredients, nutrition}

    return {name, method}
  })

  await browser.close();
  return result
}


const scrapeDeliciousMagazine = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitFor(2500);

    const result = await page.evaluate(() => {
    const name = document.querySelector('.post-title').innerText
    const details = document.querySelector('.info-box .clearfix').innerText
    const description = document.querySelector('.teaser_large').innerText
    // const method = document.querySelector('.o-Method__m-Body').innerText
    // const ingredients = document.querySelectorAll('li.content').innerText

    return { name, details, description, method, ingredients}
  })

  await browser.close();
  return result
}


module.exports = { scrapeBBC, scrapeFoodNewtork, scrapeAllRecipes, scrapeDeliciousMagazine }
