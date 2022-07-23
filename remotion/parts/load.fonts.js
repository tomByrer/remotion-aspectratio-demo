import { continueRender, delayRender, staticFile } from "remotion"
 
const waitForFont = delayRender();
const font = new FontFace(
  `Bangers`,
  `url(${staticFile("hamlet-vf.woff2")}) format('woff2')`
);
 
font
  .load()
  .then(() => {
    document.fonts.add(font);
    continueRender(waitForFont);
  })
  .catch((err) => console.log("Error loading font", err));
