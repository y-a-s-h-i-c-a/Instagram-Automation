const puppeteer = require('puppeteer');
const data = require('./code.json')
let noOfPost = 7;
let page;
(async () => {
  const browser = await puppeteer.launch({headless: false, defaultViewport : null, args:["--start-maximised"]});
  const pages = await browser.pages();
page = pages[0];
  await page.goto('https://www.instagram.com/', { waitUntil: "networkidle2" });
  await page.type("input[name = 'username']", data.user, { delay: 100 });
  await page.type("input[name = 'password']", data.pwd, { delay: 100 });
  await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle2'}),
      page.click("button[type='submit']"),
  ]);
  await naviAndClick(".sqdOP.L3NKy.y3zKF");
  await page.waitForSelector(".aOOlW.HoLwm");
  await page.click(".aOOlW.HoLwm");

  await page.waitForSelector("input[placeholder='Search']",{visible:true});
  await page.type("input[placeholder='Search']", "yashica_15");
  await page.waitForSelector(".drKGC .fuqBx a", { visible: true });
  await Promise.all([
      page.waitForNavigation({ waitUntil: "networkidle2" }),
      page.click(".drKGC .fuqBx a"),
  ]);
  await page.waitForSelector("._9AhH0", {visible: true});
  await Promise.all([
    page.waitForNavigation({ waitUntil: "networkidle2" }),
    page.click("._9AhH0"),
]);
let i=0;
do{
await page.waitForSelector(".fr66n button");
await page.click(".fr66n button");
await Promise.all([
    page.waitForNavigation({ waitUntil: "networkidle2" }),
    page.click("._65Bje.coreSpriteRightPaginationArrow"),
]);
i++;

} while(i<noOfPost)
})();
async function naviAndClick(selector){
    try{
        // await page.waitForNavigation({waitUntil:"networkidle2"});
        await page.click(selector); 
    }
    catch(err){
        console.log(err);
    }
}