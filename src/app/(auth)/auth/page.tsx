"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignInForm from "@/components/common/SignInForm";
export default function Auth() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4">
      <Card className="max-w-sm mx-auto">
        <CardHeader>
          <CardTitle>Please Sign in</CardTitle>
          <CardDescription>
            to access the private page you need to be authenticated
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
}
