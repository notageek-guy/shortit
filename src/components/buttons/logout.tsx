"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
function LogoutButton() {
  return (
    <Button
      className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
      onClick={() =>
        signOut({
          callbackUrl: `${window.location.origin}/auth`,
        })
      }
      // variant="outline"
      // size="icon"
    >
      <LogOut className="w-6 h-6" />
      Logout
    </Button>
  );
}

export default LogoutButton;
