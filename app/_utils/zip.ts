import { gzip, ungzip } from "pako";

export function encode(str: object) {
  return encodeURIComponent(
    Buffer.from(gzip(JSON.stringify(str))).toString("base64")
  );
}

export function decode(str: string) {
  return ungzip(Buffer.from(decodeURIComponent(str), "base64"), {
    to: "string",
  });
}
