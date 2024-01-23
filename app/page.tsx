import Image from "next/image";
import { Button } from "./_components/ui/Button";

const demoURL =
  "H4sIAAAAAAAAA2WQMWrDUAyGryI0e0hrh4C31lB6gG4lg%2FIsFxP76aH33tAE36AdA9kyd%2BvSE%2FQmPUGPUFFoSBokEOj%2F%2F0%2BgLXoaGWtsZPMMTQ7QUPf5hgX6PK5YTZktyrK6tq5sG1Ta7FLE%2BnH7F%2F3a76CRrmM2Q8vRaR9SL96kG1YJyjFyC2bW3pEXc9Eo2Sesy%2FlUHDnfh9cPeGC6oNyzrmiA9Csdo7Pz6Avcae4TRBqoPfFdzf%2FjbslbFUAhDFyAKPknmyoUEys4ceJzgm6gNUc8v%2FJu%2F1nzCb66wOO0nH4AzTXwzVcBAAA%3D";
export default function Home() {
  return (
    <div className="bg-primary-300 flex flex-col flex-1 px-8 py-6">
      <h1 className="text-3xl text-center mb-4 font-semibold tracking-wider text-primary-800">
        Swisher
      </h1>

      <p className="leading-8 text-lg mb-2">
        Swisher är en micro-app för att skapa menyer där betalning sker genom
        Swish.
      </p>

      <div className="flex flex-col gap-1 mb-2">
        <Button variant="" as="a" href={"/shop/new"}>
          Skapa en Shop
        </Button>
        <Button variant="ghost" as={"a"} href={`/shop/${demoURL}`}>
          Visa ett exempel
        </Button>
      </div>
      <div className="flex justify-center">
        <Image
          alt="Swisher screenshot"
          width={375}
          height={425}
          src={`/swisher.png`}
        />
      </div>
    </div>
  );
}
