import { decodeShop } from "@/app/_utils/decodeShop";
import { Shop } from "@/types";
import { ImageResponse } from "next/og";
import { QRCodeSVG } from "qrcode.react";
import { headers } from "next/headers";
import { metadata } from "@/app/layout";

export const runtime = "edge";

export const alt = metadata.title;
export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default async function Image(props: { params: { encoded: string } }) {
  const { encoded } = props.params;
  const shop: Shop = decodeShop(encoded);

  const host = headers().get("host");
  const shopURL = `https://${host}/shop/${encoded}`;

  return new ImageResponse(
    (
      <div tw="w-full h-full bg-white px-24 py-12 flex justify-between items-center">
        <div tw="flex flex-col">
          <div tw="text-[64px] mb-8">{shop.name}</div>

          <div tw="flex flex-col">
            {shop.products.map((product, i) => (
              <div key={i} tw="flex flex-wrap pb-8">
                <div tw="text-4xl">{product.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div tw="flex">
          <QRCodeSVG size={300} value={shopURL} />
        </div>
      </div>
    ),
    { ...size }
  );
}
