import MyArlertNotice from "../../components/MyArlertNotice";
import api from "../../axios/axios";
import { Spinner } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import MyInput from "../../components/MyInput";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useDispatch } from "react-redux";
import { loginSetState } from "../../store/authSlice";
import { useQueryClient } from "@tanstack/react-query";

const Schema = z.object({
  username: z.string().min(1, { message: "Emty field" }),
  password: z.string().min(6),
});
export default function LoginForm({ handleChangeLogin }) {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [errorMess, setErrorMess] = useState(null);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(Schema), // Hook up zodResolver
  });

  const onLoginSubmit = async (data) => {
    console.log(data);
    try {
      setLoading(true);

      const fetchUserInfo = async () => {
        const res = await api.post(
          "/user/login",
          {
            userId: data.username,
            password: data.password,
          },
          {
            withCredentials: true,
          },
        );
        if (res.data.success == true) {
          return res.data.userInfo;
        }
      };
      await queryClient.fetchQuery({
        queryKey: ["userInfo"],
        queryFn: fetchUserInfo,
      });
      reset();
      dispatch(loginSetState());
      setLoading(false);
      // dispatch(setUserInFo(res.data.userInfo));
      navigate("/Home");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setErrorMess(err.response.data.error);
    }
  };
  return (
    <>
      <form
        className="flex w-full flex-col gap-[1rem]"
        onSubmit={handleSubmit(onLoginSubmit)}
      >
        <span className="text-[2rem]">Login</span>
        <span className="mt-[-1rem] text-[0.8rem]">Any new idea today ?</span>
        <MyInput
          type="text"
          label="Email/Username"
          {...register("username")}
        ></MyInput>
        {errors.username && (
          <MyArlertNotice className="mt-[-0.5rem] ">
            {errors.username.message}
          </MyArlertNotice>
        )}
        <MyInput
          type="password"
          label="Password"
          {...register("password")}
        ></MyInput>
        {errors.password && (
          <MyArlertNotice className="mt-[-0.5rem] ">
            {errors.password.message}
          </MyArlertNotice>
        )}
        {errorMess && <MyArlertNotice>{errorMess}</MyArlertNotice>}
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-[#0CC8FF] to-[#9260FF] font-bold"
        >
          {isLoading ? <Spinner /> : "Login"}
        </Button>
        <button onClick={handleChangeLogin}>No account? Create one!</button>
      </form>
    </>
  );
}
