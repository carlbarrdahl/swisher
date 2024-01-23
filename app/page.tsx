import { Button } from "./_components/ui/Button";
import { ComponentProps } from "react";
import Link from "next/link";
import { ShopExamples } from "./_components/shop-examples";

const repoURL = "https://github.com/carlbarrdahl/swisher";

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 px-8 py-6 space-y-4">
        <h1 className="text-3xl text-center font-semibold tracking-wider text-primary-800">
          swisher
        </h1>

        <p className={"leading-8 tracking-wide text-xl"}>
          Swisher är en mikroapp för att skapa menyer där betalning sker genom
          Swish.
        </p>

        <p>
          Skapa din egen shop, dela QR-koden och låt dina kunder smidigt skanna
          för betalning. Inga krångliga registreringar och ditt telefonnummer
          lagras inte i någon databas.
        </p>
        <details className="text-sm">
          <summary className="p-2 cursor-pointer text-right">
            Hur funkar det?
          </summary>

          <ol className="list-disc list-inside space-y-4 mb-8">
            <li>
              Shoppens information komprimeras till en text-sträng som får plats
              i en QR-kod.
            </li>
            <li>
              När koden skannas omvandlas text-strängen till ett objekt som
              innehåller Shoppens information och produkter.
            </li>
            <li>
              Din Shop sparas också lokalt på din mobil vilket gör att du kan
              redigera den i efterhand.
            </li>
            <li>
              <A href={repoURL} target="_blank">
                Läs mer om de tekniska detailjerna och sidans källkod.
              </A>
            </li>
          </ol>
        </details>
        <div className="flex flex-col gap-1">
          <Button as="a" href={"/shop/new"} size="lg" variant="primary">
            Skapa en ny Shop
          </Button>
        </div>

        <ShopExamples />

        <footer className="pt-8 text-xs flex flex-col items-center">
          <div>
            Swisher är gratis &{" "}
            <A target="_blank" href={repoURL}>
              öppen källkod
            </A>
          </div>
          <div>
            by:{" "}
            <A target="_blank" href="https://github.com/carlbarrdahl">
              kaleido labs
            </A>
          </div>
        </footer>
      </div>
    </>
  );
}

function A(props: ComponentProps<typeof Link>) {
  return <Link className="underline underline-offset-2" {...props} />;
}
