import { QRCodeSVG } from "qrcode.react";
import { headers } from "next/headers";

export function ShopQR({ encoded = "" }) {
  const host = headers().get("host");
  const shopURL = `https://${host}/shop/${encoded}`;

  return (
    <a href={shopURL} target="_blank">
      <QRCodeSVG className="rounded" size={300} value={shopURL} />
    </a>
  );
}
