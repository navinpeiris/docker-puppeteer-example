const express = require("express");
const app = express();
const port = 3000;

const puppeteer = require("puppeteer");

let browser;

(async () => {
  browser = await puppeteer.launch({
    executablePath: "/usr/bin/google-chrome",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
})();

app.get("/", async (req, res) => {
  const url = req.query.url;
  if (url) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1024 });

    await page.goto(url);
    const pageTitle = await page.title();

    res.status(200).json({ pageTitle });
  } else {
    res.status(400).json({ error: "url query param must be specified" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

process.on("SIGINT", async () => {
  console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
  browser && (await browser.close());
  process.exit();
});
