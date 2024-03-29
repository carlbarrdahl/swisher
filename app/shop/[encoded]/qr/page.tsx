import { ShopQR } from "@/app/_components/shop-qr";
import { useShop } from "@/app/_hooks/useShop";

export default function ShopPage(props: { params: { encoded: string } }) {
  const { encoded } = props.params;

  const shop = useShop(encoded);

  if (!shop) return <div>No shop found</div>;

  return (
    <div className="flex px-8 pt-16 gap-6 items-center h-full flex-col flex-1">
      <h1 className="text-3xl font-bold">{shop.name}</h1>

      <ShopQR encoded={encoded} />
      <p className="text-gray-600 tracking-wider max-w-[300px] text-center">
        Skanna för att välja produkter och betala med Swish.
      </p>
    </div>
  );
}
