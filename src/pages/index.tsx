import Head from "next/head";
import { AtomGrid } from "~/_components/AtomGrid";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jotai Playground</title>
        <meta name="description" content="Jotai Playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Jotai Playground
          </h1>
          <AtomGrid rows={4} cols={4} />
        </div>
      </main>
    </>
  );
}
