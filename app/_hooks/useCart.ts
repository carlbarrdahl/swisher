"use client";

import { useMemo, useState } from "react";
import type { LineItem, Product, Quantities } from "@/types";

export function useCart() {
  const [quantities, setQuantity] = useState<Quantities>({});

  const inc = (pid: string) =>
    setQuantity({ ...quantities, [pid]: (quantities[pid] ?? 0) + 1 });
  const dec = (pid: string) =>
    setQuantity({ ...quantities, [pid]: (quantities[pid] ?? 0) - 1 });

  const reset = () => setQuantity({});

  return { inc, dec, reset, quantities };
}

export function useCartItems(
  products: Product[] = [],
  quantities: Quantities = {}
) {
  const lineItems: LineItem[] = useMemo(
    () =>
      Object.entries(quantities)
        .filter(
          ([id, quantity]) =>
            quantity > 0 && products.find((p, i) => i === Number(id))
        )
        .map(([id, quantity]) => ({ id: Number(id), quantity })),
    [products, quantities]
  );

  const totalAmount = useMemo(
    () =>
      products.reduce((sum, p, i) => {
        const qty = quantities[i];
        return (sum += Number(p.amount) * (qty ?? 0));
      }, 0),
    [products, quantities]
  );

  return { lineItems, totalAmount };
}
