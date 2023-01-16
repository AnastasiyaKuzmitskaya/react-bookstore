import { ArrowBack, Profile, Title } from "components";
import { RegisterPage } from "pages";
import { StyledAccountPage } from "./styles";

export const AccountPage = () => {
  return (
    <StyledAccountPage>
      <ArrowBack />
      <Title title="account" />
      <Profile />
      <RegisterPage />
    </StyledAccountPage>
  );
};
