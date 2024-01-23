"use client";

import Link from "next/link";
import { useMemo } from "react";

import type { Shop } from "@/types";
import { useSavedShop } from "../_hooks/useSavedShop";
import { Button } from "./ui/Button";

export function ShopHeader({ shop, encoded }: { encoded: string; shop: Shop }) {
  const [savedShop] = useSavedShop();

  const isOwner = useMemo(
    () => JSON.stringify(shop) === JSON.stringify(savedShop),
    [shop, savedShop]
  );

  if (!isOwner) return null;

  return (
    <header className="flex gap-2 items-center justify-between mb-2">
      <Button as={Link} href="/shop/new">
        ‹ Redigera
      </Button>
      <Button as={Link} href={`/shop/${encoded}/qr`} target="_blank">
        Visa QR
      </Button>
    </header>
  );
}
