import MyArlertNotice from "../../components/MyArlertNotice";
import api from "../../axios/axios";
import { Spinner } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import MyInput from "./../../components/MyInput";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signSchema = z
  .object({
    username: z.string().min(1, { message: "Emty field" }),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });

export default function SignupForm({ handleChangeLogin }) {
  const [isLoading, setLoading] = useState(false);
  const [errorMess, setErrorMess] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(signSchema), // Hook up zodResolver
  });
  const onSignSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await api.post("/user/signup", data);
      setLoading(false);

      if (res.data.success == true) {
        handleChangeLogin();
      }
    } catch (err) {
      console.log(err);
      setErrorMess(err.response.data.error);
      setLoading(false);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSignSubmit)}
        className="flex w-full flex-col gap-[1rem] "
      >
        <span className="text-[2rem]">SignUp</span>
        <span className="mt-[-1rem] text-[0.8rem]">
          Just some details to get you in!
        </span>
        <MyInput
          type="text"
          label="User name"
          {...register("username")}
        ></MyInput>
        {errors.username && (
          <MyArlertNotice className="mt-[-0.5rem] ">
            {errors.username.message}
          </MyArlertNotice>
        )}
        <MyInput type="email" label="Email" {...register("email")}></MyInput>
        {errors.email && (
          <MyArlertNotice>{errors.email.message}</MyArlertNotice>
        )}
        <MyInput
          type="password"
          label="Password"
          {...register("password")}
        ></MyInput>
        {errors.password && (
          <MyArlertNotice>{errors.password.message}</MyArlertNotice>
        )}
        <MyInput
          type="password"
          label="Confirm password"
          {...register("confirmPassword")}
        ></MyInput>
        {errors.confirmPassword && (
          <MyArlertNotice>{errors.confirmPassword.message}</MyArlertNotice>
        )}
        {errorMess && <MyArlertNotice>{errorMess}</MyArlertNotice>}
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-[#0CC8FF] to-[#9260FF] font-bold"
        >
          {isLoading ? <Spinner /> : "Register"}
        </Button>
        <button
          onClick={() => {
            handleChangeLogin();
            setErrorMess(null);
            reset();
          }}
        >
          Already Registered? Login
        </button>
      </form>
    </>
  );
}
