"use client";
import React, { createContext, useContext, useState } from "react";
import Navbar from "../common/Navbar";
import Hero from "../common/Hero";

interface ShortnerContextProps {
  error: any;
  setError: React.Dispatch<React.SetStateAction<any>>;
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  shortUrl: string;
  setShortUrl: React.Dispatch<React.SetStateAction<string>>;
}

const ShortnerContext = createContext<ShortnerContextProps>({
  error: null,
  setError: () => {},
  id: "",
  setId: () => {},
  shortUrl: "",
  setShortUrl: () => {},
});

export const useShortContext = () => {
  const context = useContext(ShortnerContext);
  if (!context) {
    throw new Error("useShort must be used within a ShortnerContext Provider");
  }
  return context;
};

const UrlShortner = () => {
  const [error, setError] = useState<any>(null);
  const [shortUrl, setShortUrl] = useState<string>("");
  const [id, setId] = useState<string>("");

  return (
    <div className="bg-gray-900 h-screen relative">
      <ShortnerContext.Provider
        value={{ error, setError, id, setId, shortUrl, setShortUrl }}
      >
        <Navbar />
        <Hero />
      </ShortnerContext.Provider>
    </div>
  );
};

export default UrlShortner;
