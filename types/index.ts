export type Product = {
  name: string;
  description?: string;
  amount?: number;
};
export type Shop = {
  name: string;
  number: string;
  currency: string;
  products: Product[];
};

export type Quantities = Record<string, number>;
export type LineItem = { id: number; quantity: number };
