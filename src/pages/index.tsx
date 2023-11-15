import Head from "next/head";
import { StateGrid } from "~/_components/StateGrid";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zustand Playground</title>
        <meta name="description" content="Zustand Playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Zustand Playground
          </h1>
          <StateGrid rows={4} cols={4} />
        </div>
      </main>
    </>
  );
}
