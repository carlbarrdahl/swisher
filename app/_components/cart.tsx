"use client";

import clsx from "clsx";
import { Shop } from "@/app/_components/merchant-form";
import { Button } from "@/app/_components/ui/Button";
import { useCart, useCartItems } from "@/app/_hooks/useCart";
import { formatMoney } from "@/app/_utils/formatMoney";
import { SwishPay } from "./swish-pay";

export function Cart({ shop }: { shop: Shop }) {
  const cart = useCart();
  const { totalAmount, lineItems } = useCartItems(
    shop.products,
    cart.quantities
  );

  console.log(totalAmount, lineItems);
  return (
    <>
      <ul className="flex flex-1 flex-col gap-4 overflow-y-auto h-full p-2">
        {shop.products.map((product, i) => {
          const { name, amount } = product;

          const id = String(i);
          const qty = cart.quantities[id] ?? 0;

          return (
            <li key={i} className="flex gap-2 items-center">
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div className="font-semibold">{name}</div>
                  <div className="font-normal text-gray-700 text-sm">
                    {formatMoney(amount, "SEK")}
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  {product.description}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-1 pl-1 text-xs">
                  <div>
                    <Button
                      className="rounded-full size-10"
                      disabled={qty === 0}
                      onClick={() => cart.dec(id)}
                    >
                      −
                    </Button>
                  </div>
                  <div
                    className={clsx("w-4 text-center", {
                      ["font-bold"]: qty,
                    })}
                  >
                    {qty}
                  </div>
                  <div>
                    <Button
                      className="rounded-full size-10"
                      disabled={qty >= 9}
                      onClick={() => cart.inc(id)}
                    >
                      ＋
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-between border-t bg-white p-2">
        <div>
          <div className="text-xs uppercase tracking-widest text-gray-500">
            Att betala
          </div>
          <div className="text-sm">{formatMoney(totalAmount, "sek")}</div>
        </div>
        <SwishPay
          disabled={!totalAmount}
          amount={totalAmount!}
          number={shop.number!}
        />
      </div>
    </>
  );
}
