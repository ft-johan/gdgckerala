import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="GDSC WoW Kerala" />
        <title>GDSC WoW Kerala</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gdscwowkerala.tech" />
        <meta property="og:title" content="GDSC WoW Kerala" />
        <meta
          property="og:description"
          content="GDSC WoW Kerala is a community of students and developers who are passionate about Google technologies. We are a part of Google Developers Student Clubs, a program for students to learn about Google technologies and build solutions for their local communities"
        />
        {/* TODO: Add Opengraph Images and Twitter Images. Preferrably Screenshot of website */}
        {/* <meta
    property="og:image"
    content="https://i.ibb.co/CW30z8f/Vivek-K-J.jpg"
  /> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="GDSC WoW Kerala" />
        <meta
          name="description"
          content="GDSC WoW Kerala is a community of students and developers who are passionate about Google technologies. We are a part of Google Developers Student Clubs, a program for students to learn about Google technologies and build solutions for their local communities"
        />
        <meta
          property="twitter:description"
          content="GDSC WoW Kerala is a community of students and developers who are passionate about Google technologies. We are a part of Google Developers Student Clubs, a program for students to learn about Google technologies and build solutions for their local communities"
        />
        {/* <meta
    property="twitter:image"
    content="https://i.ibb.co/CW30z8f/Vivek-K-J.jpg"
  /> */}
        <meta
          content="gdsc, google, developer, student, clubs, wow, google for developers, wow, wonder of wonders, kerala, kochi, event, tech, palakkad, ktu, college"
          name="keywords"
        />
        <meta name="theme-color" content="#151719" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
