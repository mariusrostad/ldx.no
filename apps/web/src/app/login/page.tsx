"use client";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import React from "react";

export default function Login() {
  return (
    <main>
      <button onClick={() => signIn("github")}>Login</button>
    </main>
  );
}
