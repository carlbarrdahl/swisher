import { formatMoney } from "@/app/_utils/formatMoney";
import { SwishPay } from "@/app/_components/swish-pay";
import { useLineItems, useShop } from "@/app/_hooks/useShop";

type Props = {
  params: { encoded: string; orderId: string };
  searchParams: { items: string };
};
export default function OrderPage({
  params: { encoded, orderId },
  searchParams: { items },
}: Props) {
  const shop = useShop(encoded);
  const lineItems = useLineItems(items);

  if (!shop) return <div>No shop found</div>;

  const totalAmount = lineItems.reduce(
    (sum, x) => sum + (shop.products[x.id]?.amount ?? 0) * x.quantity,
    0
  );
  return (
    <div className="p-2 space-y-4">
      <h1 className="text-2xl pt-4 pb-4">{shop.name}</h1>
      <p className={"leading-8 tracking-wide text-xl"}>
        Tack för din beställning!
      </p>
      <div className="flex gap-2  mb-4">
        <span className="">Ditt order-nummer är:</span>
        <pre className="text-xl font-semibold tracking-widest">{orderId}</pre>
      </div>
      <div className="mx-auto max-w-sm">
        <ul className="space-y-2 mb-2">
          {lineItems.map((item, i) => {
            const product = shop.products[item.id];
            return (
              <li key={i} className="flex justify-between">
                <h3>{product.name}</h3>
                <div className="text-sm">x{item.quantity}</div>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-between items-center border-t pt-2">
          <span className="text-xs uppercase tracking-widest text-gray-500">
            Total
          </span>
          <span className="text-sm font-semibold">
            {formatMoney(totalAmount)}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-center">
        <SwishPay
          orderId={orderId}
          disabled={!totalAmount}
          amount={totalAmount!}
          number={shop.number!}
          lineItems={lineItems}
        />
        <p className="text-gray-600 text-sm tracking-wide">
          Om du ännu inte har betalat kan du göra det genom att trycka på
          knappen
        </p>
      </div>
    </div>
  );
}
