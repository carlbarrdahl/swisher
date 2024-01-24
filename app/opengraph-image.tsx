import { ImageResponse } from "next/og";
import { metadata } from "./layout";

export const runtime = "edge";

export const alt = metadata.title;
export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default async function Image() {
  const swisherImage = await fetch(
    new URL("../public/swisher.png", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="bg-white w-full h-full flex p-16 justify-between">
        <div tw="flex flex-col pt-24">
          <div tw="text-[100px] text-center font-bold tracking-wider">
            {metadata.title as string}
          </div>
          <div tw="text-3xl">{metadata.description as string}</div>
        </div>
        <div tw="flex">
          {/* eslint-disable-next-line */}
          <img
            tw="border rounded-xl shadow-2xl"
            src={swisherImage}
            width={384}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
