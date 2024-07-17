const puppeteer = require("puppeteer");

async function parseLogRocketBlogHome() {
    // Launch the browser
    const browser = await puppeteer.launch();

    // Open a new tab
    const page = await browser.newPage(); 


    // Visit the page and wait until network connections are completed
    await page.goto('https://logrocket.com/blog', { waitUntil: 'networkidle2' });

    // Interact with the DOM to retrieve the titles
    const titles = await page.evaluate(() => { 
        // Select all elements with crayons-tag class 
        return [...document.querySelectorAll('.card-title a')].map(el => el.textContent);
    });

    // Don't forget to close the browser instance to clean up the memory
    await browser.close();

    // Print the results
    titles.forEach(title => console.log(`- ${title}`))
}

parseLogRocketBlogHome();