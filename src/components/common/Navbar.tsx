"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState } from "react";
import LogoutButton from "../buttons/logout";
import { Link as Link2 } from "lucide-react";
export default function Navbar() {
  const [state, setState] = useState(false);
  const { status } = useSession();
  const isAuth = status === "authenticated";
  return (
    <nav
      className={`bg-inherit pb-5  md:text-sm ${
        state
          ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
          : ""
      }`}
    >
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block">
          <Link
            href="/"
            className="text-white flex gap-x-2 text-xl font-medium"
          >
            ShortIt{" "}
            <span className="ml-1">
              <Link2 />
            </span>
          </Link>
          <div className="md:hidden">
            <button
              className="menu-btn text-stone-50"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
            state ? "block" : "hidden"
          } `}
        >
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <>
              {isAuth ? (
                <LogoutButton />
              ) : (
                <>
                  <Link href="/auth" className="block text-white">
                    Log in
                  </Link>
                </>
              )}
            </>
          </div>
        </div>
      </div>
    </nav>
  );
}
