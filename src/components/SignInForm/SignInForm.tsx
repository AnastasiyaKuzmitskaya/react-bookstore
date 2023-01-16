import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { getUser, useAppDispatch, useAppSelector, fetchSignInUser } from "store";
import RotatingLines from "react-spinners/RotateLoader";
import {
  ButtonForm,
  ForgotPassword,
  FormInput,
  InputLabel,
  StyledSignInForm,
  ErrorMessage,
} from "./styles";

export type InputFields = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const { isLoading, error } = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFields>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<InputFields> = (data) => {
    dispatch(fetchSignInUser(data));
  };

  return (
    <StyledSignInForm onSubmit={handleSubmit(onSubmit)}>
      
      <InputLabel>email</InputLabel>
      <FormInput
        type="text"
        placeholder="Your email"
        {...register("email", {
          required: "Please enter your email",
          pattern: {
            value: /[a-z]+/i,
            message: "the email address you entered is not correct",
          },
        })}
      />

      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

      <InputLabel> Password </InputLabel>
      <FormInput
        type="password"
        placeholder="your password"
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

      <Link to={ROUTE.RESET_PASSWORD}>
        <ForgotPassword>Forgot password ?</ForgotPassword>
      </Link>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <ButtonForm type="submit" whileTap={{ scale: 1.1 }}>
        {isLoading ? <RotatingLines size={25} /> : "Sign in"}
      </ButtonForm>
    </StyledSignInForm>
  );
};
