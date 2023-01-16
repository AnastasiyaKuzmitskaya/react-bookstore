import { SubmitHandler, useForm } from "react-hook-form";
import { fetchSignUpUser, getUser, useAppDispatch, useAppSelector } from "store";
import { ButtonForm, FormInput, InputLabel, StyledSignInForm, ErrorMessage } from "./styles";
import RotatingLines from "react-spinners/RotateLoader";
import { useToggle } from "hooks";
import { ModalWindow } from "components";

export type SignUpFormValue = {
  email: string;
  password: string;
  confirm: string;
};

export const SignUpForm = () => {
  const isLoading  = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useToggle();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValue>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<SignUpFormValue> = (data) => {
    dispatch(fetchSignUpUser(data));
    setIsOpen();
  };

  return (
    <StyledSignInForm onSubmit={handleSubmit(onSubmit)}>
      <ModalWindow
        isOpen={isOpen}
        status={"success"}
        message={"An error has occurred. please try again"}
        messageOpen={"Sign Up"}
        handleModal={setIsOpen}
      />
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

      <InputLabel> confirm password </InputLabel>
      <FormInput
        type="password"
        placeholder="confirm your password"
        {...register("password", {
          required: "Please confirm your password",
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

      <ButtonForm type="submit" whileTap={{ scale: 1.1 }}>
        {isLoading ? <RotatingLines size={25} /> : "Sign up"}{" "}
      </ButtonForm>
    </StyledSignInForm>
  );
};
