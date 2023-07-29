"use client";
import Image from "next/image";
import { hero } from "../data/config";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme, setTheme } = useTheme();

  const handleDownloadResume = () => {
    const { resumeLink } = hero;
    // Create a link element and set its properties
    const link = document.createElement("a");
    link.href = resumeLink;
    link.target = "_blank";
    link.download = "Resume.pdf";

    // Dispatch a click event on the link to trigger the download
    link.dispatchEvent(new MouseEvent("click"));
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
        <Image
          src="/static/icons/sun.svg"
          width={30}
          height={30}
          alt="Toggle theme"
          className="cursor-pointer toggleTheme"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      </div>
      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="mt-5 mb-4">{hero.title}</h1>
        <button
          className="btn rounded md:rounded-lg btn-primary "
          onClick={handleDownloadResume}
        >
          <h3 className="underline hover:underline-offset-auto">
            {hero.Resume}
          </h3>
        </button>
      </div>
      <p className="text-lg">{hero.desc}</p>
    </div>
  );
}
