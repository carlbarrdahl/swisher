"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { Input } from "./ui/Form";
import { Button } from "./ui/Button";
import { decode, encode } from "../_utils/zip";
import { useRouter } from "next/navigation";
import { useSavedShop } from "../_hooks/useSavedShop";

type Product = {
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

const MAX_PRODUCTS = 10;

const exampleValues = {
  name: "Cozy Cup",
  number: "0733423424",
  currency: "SEK",
  products: [
    {
      name: "☕ Coffee",
      description:
        "Aeropressed americano and asd asd asdnas dnsad nsadakla sdasdsa ddsads",
      amount: 35,
    },
    {
      name: "🍵 Tea",
      description: "Herbal tea",
      amount: 30,
    },
    {
      name: "🍌 Fruit",
      amount: 15,
    },
    {
      name: "🍰 Cake",
      amount: 45,
    },
  ],
};
export function MerchantForm() {
  const router = useRouter();
  const [shop, saveShop] = useSavedShop();

  const { control, register, handleSubmit } = useForm<Shop>({
    defaultValues: shop ?? {
      products: [{ name: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "products",
    control,
  });
  return (
    <form
      className="flex flex-1 flex-col p-2 max-h-screen space-y-2"
      onSubmit={handleSubmit((values) => {
        const encoded = encode(values);
        const decoded = decode(encoded);
        const compressed = encoded.length;
        const uncompressed = decoded.length;
        console.log(
          `Compressed: ${uncompressed} to ${compressed} (${(
            (1 - compressed / uncompressed) *
            100
          ).toFixed(2)}%)`
        );
        saveShop(values);
        router.push(`/shop/${encoded}`);
      })}
    >
      {/* <p>Fyll i namn på din shop och ditt Swish-nummer.</p> */}
      <Input
        autoFocus
        className="text-2xl"
        placeholder="Namn på shoppen"
        maxLength={23}
        {...register(`name`)}
      />

      <div className="flex gap-2">
        <Input
          placeholder="0712345678"
          type="tel"
          pattern="[0-9]{10}"
          {...register(`number`)}
          required
        />
        <Input
          className="w-12 text-xs"
          value="SEK"
          {...register(`currency`)}
          disabled
          required
        />
      </div>
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-gray-600 tracking-wider">Produkter</h3>
        <div className="flex gap-4 justify-end items-center">
          <div className="text-sm">
            {fields.length} / {MAX_PRODUCTS}
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => append({ name: "" })}
          >
            + Lägg till
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        {!fields.length && (
          <div className="flex justify-center text-sm tracking-wider text-gray-500 py-4 border rounded">
            Skapa produkter genom att trycka på knappen + Lägg till
          </div>
        )}
        {fields.map((field, i) => (
          <div key={field.id} className="flex gap-1 ">
            <div className="flex-1 space-y-1">
              <div key={field.id} className="flex gap-1 items-center">
                <Input
                  maxLength={20}
                  placeholder="Namn på produkten"
                  {...register(`products.${i}.name`)}
                />
                <Input
                  className="w-20 text-right"
                  type="number"
                  placeholder="0"
                  min={1}
                  max={9999}
                  required
                  {...register(`products.${i}.amount`, { valueAsNumber: true })}
                />
              </div>
              <textarea
                rows={2}
                maxLength={70}
                className="w-full border rounded p-2 text-sm"
                placeholder="Kort beskrivning..."
                {...register(`products.${i}.description`)}
              />
            </div>

            <Button type="button" variant="outline" onClick={() => remove(i)}>
              &times;
            </Button>
          </div>
        ))}
      </div>
      <div className="pt-8">
        <Button className="w-full" variant="primary">
          Skapa
        </Button>
      </div>
    </form>
  );
}
