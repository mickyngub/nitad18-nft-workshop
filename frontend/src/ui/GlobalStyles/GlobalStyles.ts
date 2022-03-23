//using slightly modified version of Josh Comeau's global styles

import { COLORS } from "../../constants";
import { createGlobalStyle } from "styled-components/macro";
import FCMinimal from "src/fonts/FC-Minimal-Regular.ttf";
import AloneInSpace from "src/fonts/alone-in-space.ttf";
const globalStyles = createGlobalStyle`

@font-face {
  font-family: "FCMinimal";
  src: url(${FCMinimal}) format('truetype');
}

@font-face {
  font-family: "AloneInSpace";
  src: url(${AloneInSpace}) format('truetype');
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
  font-family: "FCMinimal";
  scroll-behavior: smooth;
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

:root {
  --toastify-font-family: "AloneInSpace";
  --toastify-toast-width: 375px;


}

  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  ::-webkit-scrollbar {
    width: 0.5rem; /* width of the entire scrollbar */
    /* padding: 1rem 1rem; */
    /* margin: 1rem 1rem; */

  }

  ::-webkit-scrollbar-track {
    background: var(--color-purple); /* color of the tracking area */

  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
    to right,
    hsl(235deg 31% 33%),
    hsl(237deg 33% 21%)
  );
  border-radius: 2rem;
  }
`;

export default globalStyles;
