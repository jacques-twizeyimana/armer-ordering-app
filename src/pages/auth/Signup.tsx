import { useState } from "react";
import { SignupFields, signupSchema } from "../../types/validation/signup";
import Input from "../../components/atoms/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Signup() {
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupFields>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      phoneNumber: "+250",
    },
  });

  const onSubmit = async (data: SignupFields) => {
    setIsSaving(true);
    try {
      const response = await axios.post("/auth/signup", data);
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
      <h2 className="py-4 px-1 text-3xl text-gray-800 font-bold">
        Create account
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="py-4">
        <Input
          placeholder="Enter your first name"
          {...register("firstName")}
          label="First name"
          error={errors.firstName?.message}
        />
        <Input
          placeholder="Enter your last name"
          {...register("lastName")}
          label="Last name"
          error={errors.lastName?.message}
        />
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
            className="block w-full py-3 text-base rounded text-center px-4 bg-gray-800 text-white"
          >
            {isSaving ? (
              <div className="w-4 h-4 bg-transparent rounded-full border-2 animate-spin border-current border-t-transparent" />
            ) : (
              "Sign up"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
