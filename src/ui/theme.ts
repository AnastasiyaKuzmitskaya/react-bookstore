import { css } from "styled-components";
import { Color } from "ui";

export const themeLight = css`
  --primary-text: ${Color.Primary};
  --primary-bg: ${Color.White};
  --secondary-text: ${Color.Secondary};

`;
export const themeDark = css`
  --primary-text: ${Color.White};
  --primary-bg: ${Color.Primary_Light};
  --secondary-text: ${Color.Gray};
`;
