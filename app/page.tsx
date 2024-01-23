import Image from "next/image";
import { Button } from "./_components/ui/Button";
import { ComponentProps } from "react";
import Link from "next/link";
import { createComponent } from "./_components/ui";
import { tv } from "tailwind-variants";
import { QR } from "./_components/qr";
import { headers } from "next/headers";

const repoURL = "https://github.com/carlbarrdahl/swisher";
const demoID =
  "H4sIAAAAAAAAA2WQMU7DQBBFrzKa2oWdEKS4A0sRB6CLKCbrMbJi76xmdwsS%2BQZQItFR09FwAm7CCTgCIySihGiKlea%2F%2F0baPXoaGWtsZPcATQ7QUPf5hgX6PG5YLalm82VZVpezpW2DSptdiliv93%2FVr5dnaKTrmA1oOTrtQ%2BrFW3TFKkE5Rm7BYO0deTGKRsk%2BYT1fTMXB8%2F369AG3TGeWG9YNDZB%2Bo0O1PK0%2BwkpznyDSQO0RVy3%2B667J2xRAIQxcgCj5e3tVKCZWcOLE5wTdQFuOeHrl3f5ny0f6izM9TnfTDxIv97BXAQAA";

const foodtruckID =
  "H4sIAAAAAAAAA2XQQU7DMBAF0KuMvM4ipUWgLAvqBUDdIBaT8aixmngie5wqqnoDOAFI3ICzcQScqKBKlbzzfD%2F%2FOZo%2BiE2k0VQvR%2BOxY1OZdbK2QVjLoYWfr%2FdPUxjsJHk11WJxWxjLkYLr1YnP05vAsYGBd%2BihniIHpw3gIIRWAL0FajiEEVQ6VOFoTsU%2FteUdKwaXs89Ikrm37wvuvrzWHNtJy7G65QjOg07JWY29oxEiJuJL5UFIfFKgNP0jV%2Fq4rFReIY%2FcOnKSIlBg7MZzMFN0fqlz7X7uhmMKA1tHsz2Vey3%2B2CdUHfLNdt7NRsRqSLTPtk9dzSGPlHfL5eomn5U5%2FQLMouYdjQEAAA%3D%3D";

const eventID =
  "H4sIAAAAAAAAA33LsQrCMBRG4Xf55wxJBKEZ3RwEQXARh7S5Q9TclOTGpeTdrUMnwfVwvgVzyaFNUuFuC9gngsMhvh4kAgWfcmOBM1orBKpTibPEzOt0Ec%2FBl4Cu%2FkD7C6%2FHM%2FpdbebUanzSm%2FjLuKWRylqN3Q1am70d0D9nvJ19pQAAAA%3D%3D";
const marketID =
  "H4sIAAAAAAAAA2XQQU7DMBAF0KuMvM4ipUWgLAvqBUDdIBaT8aixmngie5wqqnoDOAFI3ICzcQScqKBKlbzzfD%2F%2FOZo%2BiE2k0VQvR%2BOxY1OZdbK2QVjLoYWfr%2FdPUxjsJHk11WJxWxjLkYLr1YnP05vAsYGBd%2BihniIHpw3gIIRWAL0FajiEEVQ6VOFoTsU%2FteUdKwaXs89Ikrm37wvuvrzWHNtJy7G65QjOg07JWY29oxEiJuJL5UFIfFKgNP0jV%2Fq4rFReIY%2FcOnKSIlBg7MZzMFN0fqlz7X7uhmMKA1tHsz2Vey3%2B2CdUHfLNdt7NRsRqSLTPtk9dzSGPlHfL5eomn5U5%2FQLMouYdjQEAAA%3D%3D";
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

        <div className="">
          <h3 className="text-sm tracking-wider text-gray-600">Exempel</h3>
          <div className="flex gap-1">
            <Button className="w-full" as="a" href={`/shop/${demoID}`}>
              Café
            </Button>
            <Button className="w-full" as="a" href={`/shop/${eventID}`}>
              Event
            </Button>
            <Button className="w-full" as="a" href={`/shop/${foodtruckID}`}>
              Food-truck
            </Button>
            <Button className="w-full" as="a" href={`/shop/${marketID}`}>
              Marknad
            </Button>
          </div>
        </div>
        <div className="py-16">
          <div className="flex flex-col items-center gap-8 justify-center">
            <a
              href={`/shop/${demoID}`}
              target="_blank"
              className="border-2 p-4 border-primary-200 rounded-2xl shadow hover:border-primary-400 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
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

function SwishQR({ encoded = "" }) {
  const host = headers().get("host");
  const shopURL = `https://${host}/shop/${encoded}`;

  return <QR className="rounded" size={300} value={shopURL} />;
}

function A(props: ComponentProps<typeof Link>) {
  return <Link className="underline underline-offset-2" {...props} />;
}
