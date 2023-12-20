"use client";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

import React from "react";
import { signIn } from "next-auth/react";
function GithubLogin() {
  return (
    <Button
      onClick={() =>
        signIn("github", {
          callbackUrl: "/",
        })
      }
      className="mt-5"
      variant="secondary"
    >
      Login with Github
      <Github className="ml-4 w-4 h-4" />
    </Button>
  );
}

export default GithubLogin;
