//using slightly modified version of Josh Comeau's global styles

import { COLORS } from "../../constants";
import { createGlobalStyle } from "styled-components/macro";
import FCMinimal from "src/fonts/FC-Minimal-Regular.ttf";
const globalStyles = createGlobalStyle`

@font-face {
  font-family: "FC Minimal";
  src: url(${FCMinimal}) format('truetype');
}
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body, #root {
  height: 100%;
  font-family: "FC Minimal";
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root {
  isolation: isolate;
}

// CSS variables

html {
    --color-purple: ${COLORS.purple};
    --color-slate-blue: ${COLORS.slateBlue};
    --color-turqoise: ${COLORS.turqoise};
    --color-green: ${COLORS.green};
    --color-red: ${COLORS.red};
    --color-black: ${COLORS.black};
    --color-black-smoky: ${COLORS.blackSmoky};
    --color-white:${COLORS.white};
    --color-gray: ${COLORS.gray};
}

a {
  text-decoration: none;
  color: var(--color-white);
}
`;

export default globalStyles;
