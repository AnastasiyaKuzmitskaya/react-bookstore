import { StyledTitle } from "./styles";

interface IProps {
  title: string | null;
}

export const Title = ({ title }: IProps) => {
  return <StyledTitle>{title}</StyledTitle>;
};
