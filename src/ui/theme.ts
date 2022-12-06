import { css } from "styled-components";
import { Color } from "./colors";

export const themeLight = css`
  --primary-text: ${Color.Primary};
  --primary-bg: ${Color.White};
`;
export const themeDark = css`
  --primary-text: ${Color.White};
  --primary-bg: ${Color.Primary_Light};
`;
