"use client";

import { doCredentialLogin } from "@/app/actions/loginAction";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    const formData = new FormData();
    try {
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await doCredentialLogin(formData);
      if (!!response.error) {
        toast.error("Invalid Credentials");
        return;
      } else {
        router.push("/dashboard");
        toast.success("Login Successfull");
      }
    } catch (error) {
      toast.error("Invalid Credentials");
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 sm:gap-4"
    >
      <input
        {...register("email", { required: "Email is required" })}
        type="email"
        placeholder="Email"
        className="p-3 rounded-xl text-black bg-white focus:outline-none w-full text-sm sm:text-base"
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}

      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Password"
        className="p-3 rounded-xl text-black bg-white focus:outline-none w-full text-sm sm:text-base"
      />
      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password.message}</p>
      )}

      <button className="cursor-pointer w-full px-4 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition text-sm sm:text-base">
        Sign In
      </button>
    </form>
  );
}
