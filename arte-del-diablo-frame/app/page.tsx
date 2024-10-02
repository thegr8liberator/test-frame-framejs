import { fetchMetadata } from "frames.js/next";
import Image from "next/image";

export async function generateMetadata() {
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : "http://localhost:3000";

  return {
    title: "Arte Del Diablo Frame",
    description: "A slideshow of Arte Del Diablo images",
    openGraph: {
      title: "Arte Del Diablo Frame",
      description: "A slideshow of Arte Del Diablo images",
      images: [{ url: `${baseUrl}/api/og` }],
    },
    other: await fetchMetadata(new URL("/frames", baseUrl)),
  };
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Arte Del Diablo Frame</h1>
        <p className="text-center sm:text-left">
          A Farcaster frame showcasing Arte Del Diablo images.
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/frames"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Frame
          </a>
          
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://zora.co/YOUR_ZORA_PAGE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Zora Page
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Created with frames.js and Next.js</p>
      </footer>
    </div>
  );
}