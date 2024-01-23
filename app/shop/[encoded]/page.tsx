import { useMemo } from "react";

import { Cart } from "@/app/_components/cart";
import { Shop } from "@/app/_components/merchant-form";
import { EditButton } from "@/app/_components/edit-shop";
import { decodeShop } from "@/app/_utils/decodeShop";
import { Button } from "@/app/_components/ui/Button";
import Link from "next/link";

export default function ShopPage(props: { params: { encoded: string } }) {
  const { encoded } = props.params;

  const shop: Shop = useMemo(() => decodeShop(encoded), [encoded]);

  if (!shop) return <div>No shop found</div>;

  return (
    <>
      <div className="p-2">
        <header className="flex gap-2 items-center justify-between mb-2">
          <EditButton shop={shop} />
          <Button as={Link} href={`/shop/${encoded}/qr`} target="_blank">
            Visa QR
          </Button>
        </header>
        <h1 className="text-3xl mb-2">{shop.name}</h1>
        <p className="text-gray-800">
          Välj de varor du vill köpa och tryck sedan på Betala för att öppna
          Swish-appen.
        </p>
      </div>
      <Cart shop={shop} />
    </>
  );
}
