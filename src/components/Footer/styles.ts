import styled from "styled-components";
import { Color, Media, Typography } from "ui";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${Color.Gray};

  ${Media.MD} {
    flex-direction: column;
    align-items: center;
  }
`;
export const Copyright = styled.p`
  ${Typography.B2}
  font-weight: 400;
  padding: 32px 0;
  color: ${Color.Secondary};

  ${Media.MD} {
    padding: 40px 0 24px;
  }
`;
