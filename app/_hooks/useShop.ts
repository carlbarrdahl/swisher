import { useMemo } from "react";
import type { LineItem, Shop } from "@/types";
import { decodeShop } from "../_utils/decodeShop";
import { parseOrder } from "../_utils/parseOrder";

export function useShop(encoded: string) {
  const shop: Shop = useMemo(() => decodeShop(encoded), [encoded]);
  return shop;
}
export function useLineItems(items: string) {
  const lineItems: LineItem[] = useMemo(() => parseOrder(items), [items]);
  return lineItems;
}
