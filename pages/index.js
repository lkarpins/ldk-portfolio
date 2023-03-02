import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>L | K </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&family=Tilt+Warp&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <Main />
    </>
  );
}
