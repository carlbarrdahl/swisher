import { Shop } from "@/app/_components/merchant-form";
import { QR } from "@/app/_components/qr";
import { decodeShop } from "@/app/_utils/decodeShop";
import { headers } from "next/headers";
import { useMemo } from "react";

export default function ShopPage(props: { params: { encoded: string } }) {
  const { encoded } = props.params;
  const host = headers().get("host");
  const shopURL = `https://${host}/shop/${encoded}`;

  const shop: Shop = useMemo(() => decodeShop(encoded), [encoded]);

  if (!shop) return <div>No shop found</div>;

  return (
    <div className="flex px-8 pt-16 gap-6 items-center h-full flex-col flex-1">
      <h1 className="text-3xl font-bold">{shop.name}</h1>
      <a href={shopURL} target="_blank">
        <QR value={shopURL} size={300} />
      </a>
      <p className="text-gray-600 tracking-wider max-w-[300px] text-center">
        Skanna för att välja produkter och betala med Swish.
      </p>
    </div>
  );
}
