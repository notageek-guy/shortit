"use client";
import { useShortContext } from "../providers/shortner-provider";
import React from "react";
import Shortener from "./Shortner";
import { Copy, ClipboardCheck } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useClip";

function Hero() {
  const { shortUrl } = useShortContext();
  const [copiedText, copy] = useCopyToClipboard();

  return (
    <section className="relative">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <div className="text-white font-medium rounded-md ring-1 ring-stone-50 max-w-sm w-full mx-auto py-1">
            {` Let's make with simply one click 👈`}
          </div>
          <h2 className="text-4xl  text-white font-extrabold mx-auto md:text-5xl">
            All in One tools for your links
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            {`On a single platform, you'll find the tool you need to short your
            links`}
          </p>
          <Shortener />
          <p className=" max-w-xl mx-auto text-gray-400">
            Just fill and short your link to grow your business
          </p>

          {shortUrl && (
            <p className="px-2 py-2   rounded inline-flex gap-x-2 ring-stone-50  max-w-xl mx-auto ring-1 text-white">
              {shortUrl}
              <span onClick={() => copy(shortUrl)}>
                {copiedText ? <ClipboardCheck /> : <Copy />}
              </span>
            </p>
          )}
        </div>
      </div>
      <div
        className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
    </section>
  );
}

export default Hero;
