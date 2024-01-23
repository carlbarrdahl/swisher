import { customAlphabet } from "nanoid";
import type { LineItem } from "@/types";

const ITEM_SEPARATOR = ".";
const QTY_SEPARATOR = "-";

/*
Swish message requirements:
Max 50 characters. 0-9, a-, ö, !?(),.-:
*/
const swishCharacters = "0123456789abcdefghijkmnpqrtwxyz";

const nanoid = customAlphabet(swishCharacters, 4);

export function createOrderId() {
  return nanoid();
}

export function formatOrder(lineItems: LineItem[]) {
  return lineItems
    .reduce<string[]>(
      (acc, x) => acc.concat([x.id, x.quantity].join(QTY_SEPARATOR)),
      []
    )
    .join(ITEM_SEPARATOR);
}
export function parseOrder(order: string) {
  return order.split(ITEM_SEPARATOR).map(([id, , quantity]) => ({
    id: Number(id),
    quantity: Number(quantity),
  }));
}
