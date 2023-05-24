"use client"
import { signIn } from "next-auth/react"

export default function Login() {
  return (
    <div
      style={{
        maxWidth: "1024px",
        margin: "auto",
        padding: "32px",
      }}
    >
      <button onClick={() => signIn("github")}>Login</button>
    </div>
  )
}
