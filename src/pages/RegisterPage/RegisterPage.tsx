import { ModalWindow, SignInForm, SignUpForm } from "components";
import { useToggle } from "hooks";
import { useState } from "react";
import { FormTab, FormWrapper, StyledRegisterPage, SwitchWrapper } from "./styles";

export interface IFormSwitch {
  signIn: boolean;
  signUp: boolean;
}
export const RegisterPage = () => {
  const [isOpen, setIsOpen] = useToggle();

  const [activeTab, setActiveTab] = useState<IFormSwitch>({
    signIn: true,
    signUp: false,
  });

  const handleSignIn = () => {
    setActiveTab({
      signIn: true,
      signUp: false,
    });
  };

  const handleSignUp = () => {
    setActiveTab({
      signIn: false,
      signUp: true,
    });
    setIsOpen();
  };

  return (
    <StyledRegisterPage>
      <FormWrapper>
        <SwitchWrapper>
          <FormTab isActive={activeTab.signIn} onClick={handleSignIn}>
            Sign in
          </FormTab>

          <FormTab isActive={activeTab.signUp} onClick={handleSignUp}>
            Sign Up
          </FormTab>
        </SwitchWrapper>
        {activeTab.signIn && <SignInForm />}
        {activeTab.signUp && <SignUpForm handleModal={setIsOpen}  />}
      </FormWrapper>
      <ModalWindow
        isOpen={isOpen}
        handleModal={handleSignUp}
        message="you have successfully logged in."
        messageOpen="Sign_Up"
        status="success"
      ></ModalWindow>
    </StyledRegisterPage>
  );
};
