import { css } from "styled-components";
import { Color } from "ui";

export const themeLight = css`
  --primary-text: ${Color.Primary};
  --primary-bg: ${Color.White};
  --secondary-text: ${Color.Secondary};
  --primary-arrow: ${Color.White};
  --text-button: ${Color.White};
  --button-color: ${Color.Primary};
  --hover: ${Color.Primary_Light};
`;
export const themeDark = css`
  --primary-text: ${Color.White};
  --primary-bg: ${Color.Primary_Light};
  --secondary-text: ${Color.Gray};
  --primary-arrow: ${Color.Primary_Light};
  --text-button: ${Color.Primary};
  --button-color: ${Color.Primary_Light};
  --hover: ${Color.Secondary};
`;
