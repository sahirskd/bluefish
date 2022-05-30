import Head from "next/head";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="2xl:mx-auto 2xl:container">
      <Head>
        <title>BlueFish</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
    </div>
  );
}
