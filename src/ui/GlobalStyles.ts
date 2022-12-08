import { createGlobalStyle } from "styled-components";
import { resetCSS } from "./resetCSS";
import { themeDark, themeLight } from "./theme";

export const GlobalStyles = createGlobalStyle`
${resetCSS};

html[theme=dark] {
  ${themeDark}
}
html[theme=light] {
  ${themeLight}
}
`;
