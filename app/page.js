import Head from "next/head";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stack from "./components/Stack";

import { meta } from "./data/config";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="p-6 lg:p-20 max-w-4xl m-auto w-full">
        <Hero />
        <div className="p-0 space-y-10">
          <Projects />
          <Stack />
          <Contact />
        </div>
      </div>
    </>
  );
}
