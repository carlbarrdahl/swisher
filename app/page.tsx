import Image from "next/image";
import { Button } from "./_components/ui/Button";
import { ComponentProps } from "react";
import Link from "next/link";
import { createComponent } from "./_components/ui";
import { tv } from "tailwind-variants";
import { QR } from "./_components/qr";
import { headers } from "next/headers";

const demoID =
  "H4sIAAAAAAAAA2WQMU7DQBBFrzKa2oWdEKS4A0sRB6CLKCbrMbJi76xmdwsS%2BQZQItFR09FwAm7CCTgCIySihGiKlea%2F%2F0baPXoaGWtsZPcATQ7QUPf5hgX6PG5YLalm82VZVpezpW2DSptdiliv93%2FVr5dnaKTrmA1oOTrtQ%2BrFW3TFKkE5Rm7BYO0deTGKRsk%2BYT1fTMXB8%2F369AG3TGeWG9YNDZB%2Bo0O1PK0%2BwkpznyDSQO0RVy3%2B667J2xRAIQxcgCj5e3tVKCZWcOLE5wTdQFuOeHrl3f5ny0f6izM9TnfTDxIv97BXAQAA";
export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 px-8 py-6 space-y-4">
        <h1 className="text-3xl text-center font-semibold tracking-wider text-primary-800">
          swisher
        </h1>

        <P className={"text-xl"}>
          Swisher är en mikroapp för att skapa menyer där betalning sker genom
          Swish.
        </P>
        <P>
          Du kan skapa en shop och får sedan en QR-kod dina kunder kan skanna.
        </P>

        <div className="flex flex-col gap-1">
          <Button as="a" href={"/shop/new"} size="lg" variant="primary">
            Skapa en ny Shop
          </Button>
        </div>

        <div className="">
          <h3 className="text-sm tracking-wider text-gray-600">Exempel</h3>
          <div className="flex gap-1">
            <Button className="w-full" as="a" href={`/shop/${demoID}`}>
              Café
            </Button>
            <Button className="w-full">Marknad</Button>
          </div>
        </div>
        <div className="py-16">
          <div className="flex flex-col items-center gap-8 justify-center">
            <a
              href={`/shop/${demoID}`}
              target="_blank"
              className="border-2 p-4 border-primary-200 rounded-2xl shadow hover:border-primary-400 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              {/* <div className="bg-gradient-to-r p-0.5 rounded-2xl from-cyan-400 via-green-400  to-pink-500"> */}
              <Image
                className="rounded-xl"
                alt="Swisher screenshot"
                width={375}
                height={425}
                src={`/swisher.png`}
              />
            </a>
            <div className="text-sm text-gray-700 tracking-widest">
              Eller skanna QR-koden
            </div>
            <SwishQR encoded={demoID} />
          </div>
        </div>
        <footer className="pt-8 text-xs flex flex-col items-center">
          <div>
            Swisher är gratis &{" "}
            <A target="_blank" href="https://github.com/carlbarrdahl/swisher">
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

function SwishQR({ encoded = "" }) {
  const host = headers().get("host");
  const shopURL = `https://${host}/shop/${encoded}`;

  return <QR className="rounded" size={300} value={shopURL} />;
}

function A(props: ComponentProps<typeof Link>) {
  return <Link className="underline underline-offset-2" {...props} />;
}

const P = createComponent("p", tv({ base: "leading-8 tracking-wide" }));
