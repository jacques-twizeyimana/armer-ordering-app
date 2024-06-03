import { useState } from "react";
import { LoginFields, loginSchema } from "../../types/validation/signup";
import Input from "../../components/atoms/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phoneNumber: "+250",
    },
  });

  const onSubmit = async (data: LoginFields) => {
    setIsSaving(true);
    try {
      const response = await axios.post("/auth/login", data);
      console.log(response.data);
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSaving(false);
      reset();
    }
  };

  return (
    <div className="w-full max-w-lg bg-white border-2 shadow-md rounded-lg py-8 px-10">
      <h2 className="pt-4 pb-2 px-1 text-3xl text-gray-800 font-bold">
        Welcome Back
      </h2>
      <p className="text-gray-500 text-sm pb-4">
        Enter your phone number and password to continue
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="py-4">
        <Input
          placeholder="Enter phone number"
          {...register("phoneNumber")}
          type="tel"
          label="Phone number"
          error={errors.phoneNumber?.message}
        />
        <Input
          placeholder="Enter password"
          {...register("password")}
          type="password"
          label="Password"
          error={errors.password?.message}
        />
        <div className="pt-4">
          <button
            disabled={isSaving}
            type="submit"
            className="block w-full py-3 text-base rounded text-center px-4 bg-gray-800 text-white"
          >
            {isSaving ? (
              <div className="w-4 h-4 bg-transparent rounded-full border-2 animate-spin border-current border-t-transparent" />
            ) : (
              "Login"
            )}
          </button>
        </div>
        <p className="text-gray-500 text-sm pt-4">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="text-gray-800">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
