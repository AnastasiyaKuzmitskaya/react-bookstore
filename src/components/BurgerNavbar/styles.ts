import styled from "styled-components";
import { motion } from "framer-motion";
import { Margin } from "ui";

export const StyledBurger = styled(motion.button)`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-right: ${Margin.Large};
  background: transparent;
  border: none;
  cursor: pointer;
`;
