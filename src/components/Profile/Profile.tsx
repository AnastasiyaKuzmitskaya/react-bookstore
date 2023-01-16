import { useForm } from "react-hook-form";
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
  ErrorMessage,
} from "./styles";

type FormProfileValues = {
  name: string;
  email: string;
  password: string;
  newPassword: string;
  confirm: string;
};

export const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProfileValues>({
    defaultValues: { email: "", password: "", confirm: "" },
  });

  return (
    <StyledProfile>
      <SubTitle>Profile</SubTitle>
      <AccountFormInfo>
        <InputContainer>
          <FormInputLabel>Name</FormInputLabel>
          <FormInput
            type="text"
            placeholder="Your name"
            {...register("name", {
              pattern: {
                value: /[a-z]+/i,
                message: "Enter your name",
              },
            })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <FormInputLabel>Email</FormInputLabel>
          <FormInput
            type="email"
            placeholder="Your email"
            {...register("email", {
              pattern: {
                value: /[a-z]+/i,
                message: "the email address you entered is not correct",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
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
              {...register("password", {
                required: "Please enter your password",
                minLength: {
                  value: 6,
                  message: "Password must be more than 6 characters",
                },
                maxLength: {
                  value: 14,
                  message: "Password must be less than 14 characters",
                },
              })}
            />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </InputContainer>

          <InputContainer>
            <FormInputLabel>New password</FormInputLabel>
            <FormInput
              type="password"
              placeholder="Your new password"
              {...register("newPassword", {
                minLength: {
                  value: 6,
                  message: "Password must be more than 6 characters",
                },
                maxLength: {
                  value: 14,
                  message: "Password must be less than 14 characters",
                },
              })}
            />
            {errors.newPassword && <ErrorMessage>{errors.newPassword.message}</ErrorMessage>}
          </InputContainer>
        </InputPassWrapper>
        <ConfirmPassWrapper>
          <InputContainer>
            <FormInputLabel>Confirm new password</FormInputLabel>
            <FormInput
              type="password"
              placeholder="Confirm password"
              {...register("confirm", {
                minLength: {
                  value: 6,
                  message: "Password must be more than 6 characters",
                },
                maxLength: {
                  value: 14,
                  message: "Password must be less than 14 characters",
                },
              })}
            />

            {errors.confirm && <ErrorMessage>{errors.confirm.message}</ErrorMessage>}
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
