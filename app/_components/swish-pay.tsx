"use client";
import { useParams, useRouter } from "next/navigation";
import { LineItem } from "../_hooks/useCart";
import { Button } from "./ui/Button";
import { formatOrder, createOrderId } from "../_utils/parseOrder";

export function SwishPay({
  lineItems,
  orderId = createOrderId(),
  ...props
}: SwishInput & {
  orderId?: string;
  lineItems: LineItem[];
  disabled?: boolean;
}) {
  const router = useRouter();
  const { encoded } = useParams();

  const link = createSwishLink({
    ...props,
    message: `${orderId}:${formatOrder(lineItems)}`,
  });

  return (
    <Button
      variant="primary"
      onClick={() => {
        // Open Swish app
        window.open(link);

        router.push(
          `/shop/${encoded}/${orderId}?items=${formatOrder(lineItems)}`
        );
      }}
      {...props}
    >
      Betala med Swish
    </Button>
  );
}

type SwishInput = {
  amount: number;
  number: string;
  message?: string;
  currency?: string;
};

function createSwishLink({ amount, currency, number, message }: SwishInput) {
  const prefix = `https://app.swish.nu/1/p/sw/`;
  const params = new URLSearchParams({
    sw: number,
    amt: String(amount),
    cur: currency ?? "SEK",
    msg: message ?? "",
    // edit: "amt,msg",
    src: "qr",
  }).toString();

  return `${prefix}?${params}`;
}
