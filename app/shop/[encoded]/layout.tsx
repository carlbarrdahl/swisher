import { decodeShop } from "@/app/_utils/decodeShop";
import { Metadata, ResolvingMetadata } from "next";

export default function Layout({
  children,
}: Props & { children: React.ReactNode }) {
  return <>{children}</>;
}

type Props = {
  params: { encoded: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const shop = decodeShop(params.encoded);
  const title = shop
    ? `${shop.name} - ${(await parent).title?.absolute}`
    : null;

  return { title };
}
