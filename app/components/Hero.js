"use client";
import Image from "next/image";
import { hero } from "../data/config";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Hero() {
  const { theme, setTheme } = useTheme();

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = hero.resumeLink;
    link.target = "_blank";
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <div className="mb-20">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="w-20 h-20 rounded-full relative overflow-hidden">
          <Image
            src="/static/profile.png"
            layout="fill"
            objectFit="contain"
            alt="Abdelrany"
          />
        </div>

        <button
          class="h-12 w-12 rounded-3xl p-2 hover:bg-dark dark:hover:bg-white"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <svg
            class="fill-violet-700 block dark:hidden"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            class="fill-yellow-500 hidden dark:block"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="mt-5 mb-4">{hero.title}</h1>
        <button className=" " onClick={handleDownloadResume}>
          <h3 className="hover:underline hover:text-gray-500 hover:duration-300 cursor-pointer">
            {hero.Resume}
          </h3>
        </button>
      </div>
      <p className="text-lg">{hero.desc}</p>
    </div>
  );
}
