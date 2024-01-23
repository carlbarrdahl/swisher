import { useMemo } from "react";
import { Shop } from "@/app/_components/merchant-form";
import { decode } from "@/app/_utils/zip";

export function useShop(encoded: string) {
  const shop: Shop = useMemo(() => {
    try {
      return JSON.parse(decode(encoded));
    } catch (error) {
      return null;
    }
  }, [encoded]);
  return shop;
}
