import { decode } from "./zip";

export function decodeShop(encoded: string) {
  try {
    return JSON.parse(decode(encoded));
  } catch (error) {
    return null;
  }
}
