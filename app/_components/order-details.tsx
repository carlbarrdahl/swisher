import { Shop } from "@/app/_components/merchant-form";
import { LineItem } from "@/app/_hooks/useCart";
import { formatMoney } from "@/app/_utils/formatMoney";
import { SwishPay } from "@/app/_components/swish-pay";

type Props = {
  shop: Shop;
  totalAmount: number;
  lineItems: LineItem[];
};

export function OrderDetails({ shop, lineItems, totalAmount }: Props) {
  if (!shop) return <div>No shop found</div>;

  return (
    <>
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
    </>
  );
}
