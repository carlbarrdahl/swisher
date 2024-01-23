import { useMemo } from "react";

import { Cart } from "@/app/_components/cart";
import { Shop } from "@/app/_components/merchant-form";
import { ShopHeader } from "@/app/_components/shop-header";
import { decodeShop } from "@/app/_utils/decodeShop";

export default function ShopPage(props: { params: { encoded: string } }) {
  const { encoded } = props.params;

  const shop: Shop = useMemo(() => decodeShop(encoded), [encoded]);

  if (!shop) return <div>No shop found</div>;

  return (
    <>
      <div className="p-2">
        <ShopHeader shop={shop} encoded={encoded} />
        <h1 className="text-2xl mb-2">{shop.name}</h1>
        <p className="text-gray-800 text-sm leading-6 tracking-wide">
          Välj de varor du vill köpa och tryck sedan på Betala för att öppna
          Swish-appen.
        </p>
      </div>
      <Cart shop={shop} />
    </>
  );
}
