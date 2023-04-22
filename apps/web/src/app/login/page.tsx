"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <main>
      <button onClick={() => signIn("github")}>Login</button>
    </main>
  );
}
