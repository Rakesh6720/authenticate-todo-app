import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Authenticated Todo App</title>
      </Head>
      <Navbar />
      <main>
        <h1>Todo App</h1>
      </main>
    </div>
  );
}
