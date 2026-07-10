import { resolve } from "node:path";
import puppeteer from "puppeteer";

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(`file://${resolve("dist/cv.html")}`, { waitUntil: "networkidle0" });
await page.evaluateHandle("document.fonts.ready");
await page.pdf({
  path: "dist/cv.pdf",
  preferCSSPageSize: true,
  printBackground: true,
});
await browser.close();

console.log("built dist/cv.pdf");
