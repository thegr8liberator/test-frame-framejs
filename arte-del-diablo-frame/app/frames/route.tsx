import { Button } from "frames.js/next";
import { frames } from "./frames";

const IPFS_GATEWAY = "https://ipfs.io/ipfs/";
const IMAGES = [
  "QmVwxEDWazmYrzhYW4WUEoaCoJUgbvo4h6HS2RnH3bXsas",
  "QmTUCCubUb51wEWAhy7m64HSWHsTK3Wdnjp7UVrASHh1F1",
  "QmQLpsvzjsbjFGNbyS36kfBCsjhfWe4s9nD5gB6FH5DdAm",
  "QmasFFKqW6im7mf19YV1ePgRATM3YiHtkWpE6DX5oxi15H"
];

const handleRequest = frames(async (ctx) => {
  const currentPage = parseInt(ctx.searchParams.page || "0");

  if (currentPage === 0) {
    return {
      image: (
        <div tw="w-full h-full bg-purple-600 flex items-center justify-center">
          <span tw="text-white text-4xl font-bold">Arte Del Diablo</span>
        </div>
      ),
      buttons: [
        <Button action="post" target={{ query: { page: "1" } }}>
          Next
        </Button>,
      ],
    };
  }

  if (currentPage > 0 && currentPage <= IMAGES.length) {
    const imageUrl = `${IPFS_GATEWAY}${IMAGES[currentPage - 1]}`;
    return {
      image: imageUrl,
      buttons: [
        <Button action="post" target={{ query: { page: (currentPage - 1).toString() } }}>
          Back
        </Button>,
        currentPage < IMAGES.length ? (
          <Button action="post" target={{ query: { page: (currentPage + 1).toString() } }}>
            Next
          </Button>
        ) : (
          <Button action="link" target="https://zora.co/@0xdiablo">
            Visit my Zora page
          </Button>
        ),
      ],
    };
  }

  return {
    image: (
      <div tw="w-full h-full bg-red-600 flex items-center justify-center">
        <span tw="text-white text-4xl font-bold">Error: Invalid Page</span>
      </div>
    ),
    buttons: [
      <Button action="post" target={{ query: { page: "0" } }}>
        Start Over
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;