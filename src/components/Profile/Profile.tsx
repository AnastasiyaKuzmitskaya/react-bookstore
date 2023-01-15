import {
  AccountFormInfo,
  ButtonGroup,
  CancelButton,
  FormInput,
  FormInputLabel,
  PasswordForm,
  StyledProfile,
  SubTitle,
  SaveButton,
  InputContainer,
  InputPassWrapper,
  ConfirmPassWrapper,
} from "./styles";

/* type InputFormValues = {
  name: string;
  email: string;
  password: string;
  newPassword: string;
}; */

export const Profile = () => {
  return (
    <StyledProfile>
      <SubTitle>Profile</SubTitle>

      <AccountFormInfo>
        <InputContainer>
          <FormInputLabel>Name</FormInputLabel>
          <FormInput
            type="text"
            placeholder="Your name"
            /*  {...register("name", {
            pattern: {
              value: true,
              message: "Enter your name",
            },
          })} */
          />

          {/* {errors.name && ( 
        <ErrorMassage>{errors.name.message}</ErrorMassage>
         )}  */}
        </InputContainer>

        <InputContainer>
          <FormInputLabel>Email</FormInputLabel>
          <FormInput
            type="email"
            placeholder="Your email"
            /* {...register("email", {
            pattern: {
              value: /[a-z]+/i,
              message: `the email address you entered is not correct`,
            },
          })} */
          />
          {/* {errors.email && <ErrorMassage>{errors.email.message}</ErrorMassage>} */}
        </InputContainer>
      </AccountFormInfo>

      <SubTitle>Password</SubTitle>

      <PasswordForm>
        <InputPassWrapper>
          <InputContainer>
            <FormInputLabel> Password</FormInputLabel>
            <FormInput
              type="password"
              placeholder="Current password"
              /*  {...register("password", {
            required: "Please enter your password",
            minLength: {
              value: 6,
              message: "Password must be more than 6 characters",
            },
            maxLength: {
              value: 14,
              message: "Password must be less than 14 characters",
            },
          })} */
            />
            {/*         {errors.password && <ErrorMassage>
            {errors.password.message}</ErrorMassage>} */}
          </InputContainer>

          <InputContainer>
            <FormInputLabel>New password</FormInputLabel>
            <FormInput
              type="password"
              placeholder="Your new password"
              /*  {...register("newPassword", {
            minLength: {
              value: 6,
              message: "Password must be more than 6 characters",
            },
            maxLength: {
              value: 14,
              message: "Password must be less than 14 characters",
            },
          })} */
            />
            {/*     {errors.newPassword && 
            <ErrorMassage>{errors.newPassword.
                message}</ErrorMassage>}
             */}
          </InputContainer>
        </InputPassWrapper>

        <ConfirmPassWrapper>
          <InputContainer>
            <FormInputLabel>Confirm new password</FormInputLabel>
            <FormInput
              type="password"
              placeholder="Confirm password"
              /*  {...register("confirmPassword", {
            minLength: {
              value: 6,
              message: "Password must be more than 6 characters",
            },
            maxLength: {
              value: 14,
              message: "Password must be less than 14 characters",
            },
          })} */
            />

            {/*{errors.confirmPassword && 
            <ErrorMassage>{errors.confirmPassword.message}</ErrorMassage>} */}
          </InputContainer>
        </ConfirmPassWrapper>
      </PasswordForm>

      <ButtonGroup>
        <SaveButton type="submit">save changes</SaveButton>
        <CancelButton type="button">Cancel</CancelButton>
      </ButtonGroup>
    </StyledProfile>
  );
};
