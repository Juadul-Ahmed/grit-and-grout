"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";
import { GrGoogle } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignInPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/", 
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Invalid credentials.");
      console.error({ error });
    } else {
      router.push("/");
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-6">
      <ToastContainer position="top-right" theme="dark" autoClose={2000} />

      <Card className="border border-zinc-200 dark:border-zinc-800 mx-auto w-full max-w-lg py-12 px-10 shadow-2xl bg-white dark:bg-zinc-900">
        <div className="mb-8 text-center">
          <span className="text-[#06b6d4] font-black uppercase tracking-[0.3em] text-[10px]">Welcome Back</span>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white mt-2">
            Sign <span className="text-[#06b6d4]">In</span>
          </h1>
        </div>

        <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Invalid email address";
              }
              return null;
            }}
          >
            <Label className="text-[10px] font-bold uppercase  text-zinc-500">Email Address</Label>
            <Input placeholder="" variant="bordered" />
            <FieldError className="text-rose-500 text-[10px] font-bold uppercase mt-1" />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) return "Min 8 characters required";
              return null;
            }}
          >
            <Label className="text-[10px] font-bold uppercase  text-zinc-500">Password</Label>
            <Input placeholder="" variant="bordered" />
            <FieldError className="text-rose-500 text-[10px] font-bold uppercase mt-1" />
          </TextField>

          <div className="flex flex-col gap-3 mt-2">
            <Button
              type="submit"
              isLoading={loading}
              className="w-full bg-[#27272a] hover:bg-[#06b6d4] text-white font-black uppercase  text-xs py-7 transition-all duration-300"
            >
              Sign In
            </Button>
          </div>
        </Form>

        <div className="flex items-center my-8">
          <div className="flex-grow border-t border-zinc-200 dark:border-zinc-800"></div>
          <span className="mx-4 text-[10px] font-bold text-zinc-400 uppercase ">Or</span>
          <div className="flex-grow border-t border-zinc-200 dark:border-zinc-800"></div>
        </div>

        <Button
          onClick={handleGoogleSignIn}
          variant="bordered"
          className="w-full border-zinc-200 dark:border-zinc-800 font-bold uppercase text-xs py-7 hover:bg-zinc-50 dark:hover:bg-zinc-800"
          startContent={<GrGoogle className="text-lg" />}
        >
        <GrGoogle className="text-lg" />  Continue with Google
        </Button>
      </Card>
    </div>
  );
}