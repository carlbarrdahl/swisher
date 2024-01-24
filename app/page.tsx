import { Button } from "./_components/ui/Button";
import { ShopExamples } from "./_components/shop-examples";
import { A } from "./_components/ui/A";
import { HowDoesItWork, repoURL } from "./_components/how-does-it-work";

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

        <HowDoesItWork />

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
              zephyr valley
            </A>
          </div>
        </footer>
      </div>
    </>
  );
}
