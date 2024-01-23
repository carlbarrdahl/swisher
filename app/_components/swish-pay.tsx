import { Button } from "./ui/Button";

export function SwishPay(props: SwishInput & { disabled?: boolean }) {
  const link = createSwishLink(props);

  console.log(link);
  return (
    <Button variant="primary" onClick={() => window.open(link)} {...props}>
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
    // msg: message ?? "",
    // edit: "amt,msg",
    src: "qr",
  }).toString();

  return `${prefix}?${params}`;
}
