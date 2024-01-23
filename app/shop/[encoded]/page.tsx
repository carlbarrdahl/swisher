import { Cart } from "@/app/_components/cart";
import { ShopHeader } from "@/app/_components/shop-header";
import { useShop } from "@/app/_hooks/useShop";

export default function ShopPage(props: { params: { encoded: string } }) {
  const { encoded } = props.params;

  const shop = useShop(encoded);

  if (!shop) return <div>No shop found</div>;

  return (
    <>
      <div className="p-2">
        <ShopHeader shop={shop} encoded={encoded} />
        <h1 className="text-2xl pt-4 pb-4">{shop.name}</h1>
        <p className="text-gray-800 text-sm leading-6 tracking-wide mb-4">
          Välj de varor du vill köpa och tryck sedan på Betala för att öppna
          Swish-appen.
        </p>
      </div>
      <Cart shop={shop} />
    </>
  );
}
