import { QRCodeSVG } from "qrcode.react";
import { ComponentProps } from "react";

export function QR(props: ComponentProps<typeof QRCodeSVG>) {
  return <QRCodeSVG {...props} />;
}
