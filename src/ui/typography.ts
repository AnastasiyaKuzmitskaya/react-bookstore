import { css } from "styled-components";
import { Media } from "./media";

const H1 = css`
  font-family: "Bebas Neue";
  font-weight: 700;
  font-size: 56px;
  line-height: 64px;
  letter-spacing: 0em;
  ${Media.SM} {
    font-size: 32px;
    line-height: 44px;
  }
`;

const H2 = css`
  font-family: "Bebas Neue";
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  ${Media.SM} {
    font-size: 28px;
    line-height: 40px;
  }
`;
const H3 = css`
  font-family: "Bebas Neue";
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0em;
`;

const S1 = css`
  font-family: "Bebas Neue";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
`;

const B1 = css`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0em;
`;
const B2 = css`
  font-family: "Roboto";
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0em;
`;

export const Typography = { H1, H2, H3, S1, B1, B2 };
