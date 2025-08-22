"use client";

import { doSignup } from "@/app/actions/signupAction";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function SignupForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form data:", data);
    const formdata = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formdata.append(key, value);
    });
    try {
      const res = await doSignup(formdata);
      if (res.status) {
        toast.success("Successfully Signedup");
        router.push("login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error while signing up");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 sm:gap-4"
    >
      <input
        {...register("name", { required: "Full name is required" })}
        type="text"
        placeholder="Full Name"
        className="p-3 rounded-xl text-black bg-white focus:outline-none w-full"
      />
      {errors.name && (
        <p className="text-red-500 text-sm">{errors.name.message}</p>
      )}

      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "Enter a valid email",
          },
        })}
        type="email"
        placeholder="Email"
        className="p-3 rounded-xl text-black bg-white focus:outline-none w-full"
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}

      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
        type="password"
        placeholder="Password"
        className="p-3 rounded-xl text-black bg-white focus:outline-none w-full"
      />
      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password.message}</p>
      )}

      <input
        {...register("confirmPassword", {
          required: "Please confirm password",
          validate: (value) =>
            value === getValues("password") || "Passwords do not match",
        })}
        type="password"
        placeholder="Confirm Password"
        className="p-3 rounded-xl text-black bg-white focus:outline-none w-full"
      />
      {errors.confirmPassword && (
        <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
      )}

      <button
        type="submit"
        className="cursor-pointer w-full px-4 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition"
      >
        Sign Up
      </button>
    </form>
  );
}
