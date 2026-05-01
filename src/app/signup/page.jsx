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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUpPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const image = e.target.image.value;
    const password = e.target.password.value;
    const email = e.target.email.value;

    const { data, error } = await authClient.signUp.email({
      name,
      image,
      password,
      email,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Registration failed.");
      console.error({ error });
    } else {
      
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-6">
      <ToastContainer position="top-right" theme="dark" autoClose={2000} />
      
      <Card className="border border-zinc-200 dark:border-zinc-800 mx-auto w-full max-w-lg py-12 px-10 shadow-2xl bg-white dark:bg-zinc-900">
        <div className="mb-8 text-center">
          <span className="text-[#06b6d4] font-black uppercase tracking-[0.3em] text-[10px]">Studio Access</span>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white mt-2">
            Sign <span className="text-[#06b6d4]">Up</span>
          </h1>
        </div>

        <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text">
            <Label className="text-[10px] font-bold uppercase  text-zinc-500">Full Name</Label>
            <Input placeholder="name" variant="bordered" className="font-medium" />
            <FieldError className="text-rose-500 text-[10px] font-bold uppercase mt-1" />
          </TextField>

          <TextField isRequired name="image" type="text">
            <Label className="text-[10px] font-bold uppercase  text-zinc-500">Profile Image URL</Label>
            <Input placeholder="image url" variant="bordered" />
            <FieldError className="text-rose-500 text-[10px] font-bold uppercase mt-1" />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Invalid email";
              }
              return null;
            }}
          >
            <Label className="text-[10px] font-bold uppercase  text-zinc-500">Email Address</Label>
            <Input placeholder="email" variant="bordered" />
            <FieldError className="text-rose-500 text-[10px] font-bold uppercase mt-1" />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) return "Min 8 characters";
              if (!/[A-Z]/.test(value)) return "Need 1 uppercase";
              if (!/[0-9]/.test(value)) return "Need 1 number";
              return null;
            }}
          >
            <Label className="text-[10px] font-bold uppercase  text-zinc-500">Password</Label>
            <Input placeholder="password" variant="bordered" />
            <Description className="text-[9px] text-zinc-400 mt-1 uppercase">
              8+ chars • 1 Upper • 1 Num
            </Description>
            <FieldError className="text-rose-500 text-[10px] font-bold uppercase mt-1" />
          </TextField>

          <div className="flex flex-col gap-3 mt-4">
            <Button 
              type="submit" 
              isLoading={loading}
              className="w-full bg-[#27272a] hover:bg-[#06b6d4] text-white font-black uppercase  text-xs py-7 transition-all duration-300"
            >
              Signup
            </Button>
            <Button 
              type="reset" 
              variant="light" 
              className="w-full text-zinc-400 font-bold uppercase tracking-widest text-[10px]"
            >
              Reset Form
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}