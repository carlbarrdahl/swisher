import Image from "next/image";
import { Button } from "./_components/ui/Button";
import { ComponentProps } from "react";
import Link from "next/link";

const demoURL =
  "H4sIAAAAAAAAA2WQMU7DQBBFrzKa2oWdEKS4A0sRB6CLKCbrMbJi76xmdwsS%2BQZQItFR09FwAm7CCTgCIySihGiKlea%2F%2F0baPXoaGWtsZPcATQ7QUPf5hgX6PG5YLalm82VZVpezpW2DSptdiliv93%2FVr5dnaKTrmA1oOTrtQ%2BrFW3TFKkE5Rm7BYO0deTGKRsk%2BYT1fTMXB8%2F369AG3TGeWG9YNDZB%2Bo0O1PK0%2BwkpznyDSQO0RVy3%2B667J2xRAIQxcgCj5e3tVKCZWcOLE5wTdQFuOeHrl3f5ny0f6izM9TnfTDxIv97BXAQAA";
export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 px-8 py-6 space-y-4">
        <h1 className="text-3xl text-center font-semibold tracking-wider text-primary-800">
          swisher
        </h1>

        <p className="leading-8 text-lg tracking-wide">
          Swisher är en mikroapp för att skapa menyer där betalning sker genom
          Swish.
        </p>

        <div className="flex flex-col gap-1">
          <Button as="a" href={"/shop/new"} size="lg" variant="primary">
            Skapa en ny Shop
          </Button>
        </div>
        <div className="">
          <h3 className="text-sm tracking-wider">Exempel</h3>
          <div className="flex gap-1">
            <Button className="w-full" as="a" href={`/shop/${demoURL}`}>
              Café
            </Button>
            <Button className="w-full">Marknad</Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            className="border rounded-2xl px-2"
            alt="Swisher screenshot"
            width={375}
            height={425}
            src={`/swisher.png`}
          />
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

function A(props: ComponentProps<typeof Link>) {
  return <Link className="underline underline-offset-2" {...props} />;
}
