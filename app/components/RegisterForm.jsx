"use client";
import { useFormState, useFormStatus } from "react-dom";
import { register } from "../actions/userController";

export default function RegisterForm() {
  const [formState, formAction] = useFormState(register, {});

  console.log("formstate", formState);

  return (
    <form action={formAction} className="max-w-xs mx-auto">
      <div className="mb-3">
        <input
          autoComplete="off"
          type="text"
          name="username"
          placeholder="Username"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="mb-3">
        <input
          autoComplete="off"
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <button className="btn btn-primary">Create Account</button>
    </form>
  );
}
