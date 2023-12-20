"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { nanoid } from "nanoid";
import { useShortContext } from "../providers/shortner-provider";
import validator from "validator";
import { useSession } from "next-auth/react";
const Shortener: React.FC = () => {
  const [url, setUrl] = useState("");
  const { setId, setShortUrl } = useShortContext();

  const session = useSession();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedUrl = String(url).trim();
    if (!trimmedUrl) return;

    if (!validator.isURL(trimmedUrl)) {
      alert("Not a valid URL");
    } else {
      try {
        const linkId = nanoid();
        console.log(session);
        const res = await fetch(
          `https://shortit-18ofh94wo-manishkumar180.vercel.app/api/link/${linkId}`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(url),
          }
        );
        if (res.ok) {
          const data = await res.json();
          setUrl("");
          if (data) {
            setId(data.linkId);
            setShortUrl(data.url);
          }
        }
      } catch (error: any) {
        console.error("Error:", error.message);
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="url"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="url"
          id="url"
          value={url}
          onChange={handleChange}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="https://google.com"
          required
        />

        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Short Link <span style={{ color: "white" }}>👉🏼</span>
        </button>
      </div>
    </form>
  );
};

export default Shortener;
