"use client";

import { SessionProvider } from "next-auth/react";
import { FC } from "react";
interface ProviderProps {
  children: React.ReactNode;
}

const AuthProvider: FC<ProviderProps> = ({ children }) => {
  return (
    <SessionProvider refetchOnWindowFocus={false}>{children}</SessionProvider>
  );
};

export default AuthProvider;
