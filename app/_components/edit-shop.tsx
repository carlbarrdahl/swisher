"use client";

import Link from "next/link";
import { useMemo } from "react";

import { useSavedShop } from "../_hooks/useSavedShop";
import { Button } from "./ui/Button";
import { Shop } from "./merchant-form";

export function EditButton({ shop }: { shop: Shop }) {
  const [savedShop] = useSavedShop();

  const isOwner = useMemo(
    () => JSON.stringify(shop) === JSON.stringify(savedShop),
    [shop, savedShop]
  );

  if (!isOwner) return null;

  return (
    <>
      <Button as={Link} href="/">
        ← Redigera
      </Button>
    </>
  );
}
