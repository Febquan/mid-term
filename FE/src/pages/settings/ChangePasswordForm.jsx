import api from "../../axios/axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input, Button, Spinner } from "@nextui-org/react";
import MyArlertNotice from "../../components/MyArlertNotice";
import MySuscesstNotice from "../../components/MySuscessNotice";
import { useMutation } from "@tanstack/react-query";

const Schema = z
  .object({
    newPassword: z.string().min(6),
    confirmPassword: z.string().min(6),
    oldPassword: z.string().min(1, { message: "Emty field" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });
export default function ChangePasswordForm() {
  const onChangePass = async (data) => {
    const a = await api.post("/user/changepass", data);
    console.log(a);
    return a;
  };
  const [errorMess, setErrorMess] = useState(null);
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: onChangePass,
    onError: (data) => {
      setErrorMess(data.response.data.error);
    },
  });
  console.log(isPending);
  const onChangeSubmit = async (formData) => {
    setErrorMess(null);
    await mutate({
      newPassword: formData.newPassword,
      oldPassword: formData.oldPassword,
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Schema), // Hook up zodResolver
  });
  return (
    <form
      className="flex w-full flex-col gap-[1rem]"
      onSubmit={handleSubmit(onChangeSubmit)}
    >
      <span className="text-[2rem]">Change Password</span>

      <Input
        type="password"
        label="New Password"
        {...register("newPassword")}
      ></Input>
      {errors.newPassword && (
        <MyArlertNotice>{errors.newPassword.message}</MyArlertNotice>
      )}
      <Input
        type="password"
        label="Confirm password"
        {...register("confirmPassword")}
      ></Input>
      {errors.confirmPassword && (
        <MyArlertNotice>{errors.confirmPassword.message}</MyArlertNotice>
      )}
      <Input
        type="password"
        label="Old password"
        {...register("oldPassword")}
      ></Input>
      {errors.oldPassword && (
        <MyArlertNotice>{errors.oldPassword.message}</MyArlertNotice>
      )}
      {errorMess && <MyArlertNotice>{errorMess}</MyArlertNotice>}
      {isSuccess && (
        <MySuscesstNotice>Change password successful</MySuscesstNotice>
      )}
      <Button type="submit" className="w-full  font-bold" variant="ghost">
        {isPending ? <Spinner /> : "Change"}
      </Button>
    </form>
  );
}
