"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import GithubLogin from "../buttons/github-login";
import { toast } from "../ui/use-toast";

function SignInForm() {
  const [email, setEmail] = useState("");
  async function signInWithEmail() {
    const signInResult = await signIn("email", {
      email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });
    if (!signInResult?.ok) {
      return toast({
        title: "Well this didn't work...",
        description: "Something went wrong, please try again",
        variant: "destructive",
      });
    }
    return toast({
      title: "Check your email",
      description: "A magic link has been sent to you",
    });
  }
  return (
    <div className="flex flex-col">
      <form action={signInWithEmail}>
        <div className="flex flex-col gap-y-2">
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            name="email"
          />
        </div>
        <Button type="submit" className="mt-4 w-full">
          Login in with Email
        </Button>
      </form>
      <GithubLogin />
    </div>
  );
}

export default SignInForm;
