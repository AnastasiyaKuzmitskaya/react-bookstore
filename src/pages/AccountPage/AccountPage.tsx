import { ArrowBack, Profile, Title } from "components";
import { StyledAccountPage } from "./styles";

export const AccountPage = () => {
  return (
    <StyledAccountPage>
      <ArrowBack />
      <Title title="account" />
      <Profile />
    </StyledAccountPage>
  );
};
