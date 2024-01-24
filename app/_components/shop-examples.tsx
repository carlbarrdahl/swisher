import Image from "next/image";
import { Button } from "./ui/Button";
import { ShopQR } from "./shop-qr";

export const demoID =
  "H4sIAAAAAAAAA2WQMU7DQBBFrzKa2oWdEKS4A0sRB6CLKCbrMbJi76xmdwsS%2BQZQItFR09FwAm7CCTgCIySihGiKlea%2F%2F0baPXoaGWtsZPcATQ7QUPf5hgX6PG5YLalm82VZVpezpW2DSptdiliv93%2FVr5dnaKTrmA1oOTrtQ%2BrFW3TFKkE5Rm7BYO0deTGKRsk%2BYT1fTMXB8%2F369AG3TGeWG9YNDZB%2Bo0O1PK0%2BwkpznyDSQO0RVy3%2B667J2xRAIQxcgCj5e3tVKCZWcOLE5wTdQFuOeHrl3f5ny0f6izM9TnfTDxIv97BXAQAA";

const foodtruckID =
  "H4sIAAAAAAAAA2XQQU7DMBAF0KuMvM4ipUWgLAvqBUDdIBaT8aixmngie5wqqnoDOAFI3ICzcQScqKBKlbzzfD%2F%2FOZo%2BiE2k0VQvR%2BOxY1OZdbK2QVjLoYWfr%2FdPUxjsJHk11WJxWxjLkYLr1YnP05vAsYGBd%2BihniIHpw3gIIRWAL0FajiEEVQ6VOFoTsU%2FteUdKwaXs89Ikrm37wvuvrzWHNtJy7G65QjOg07JWY29oxEiJuJL5UFIfFKgNP0jV%2Fq4rFReIY%2FcOnKSIlBg7MZzMFN0fqlz7X7uhmMKA1tHsz2Vey3%2B2CdUHfLNdt7NRsRqSLTPtk9dzSGPlHfL5eomn5U5%2FQLMouYdjQEAAA%3D%3D";

const eventID =
  "H4sIAAAAAAAAA33LsQrCMBRG4Xf55wxJBKEZ3RwEQXARh7S5Q9TclOTGpeTdrUMnwfVwvgVzyaFNUuFuC9gngsMhvh4kAgWfcmOBM1orBKpTibPEzOt0Ec%2FBl4Cu%2FkD7C6%2FHM%2FpdbebUanzSm%2FjLuKWRylqN3Q1am70d0D9nvJ19pQAAAA%3D%3D";
const marketID =
  "H4sIAAAAAAAAA2WRv07DMBDGX%2BXkOULlX4HulZCqLnREDJfYTY3jc3S2K1DFG4CYkGCBhY2BLWJjyJvwAvAIOJWQIjLcYN%2F59933eSNqdjIWwYvJ%2BUYQWiUm4ufl7QlmzuaxWKHIBFoXKYjJ4SgTUvmCdR20ozQ5JTAVeq%2B9AVesINb1ktMBSSqQfF2YHXGT9cB3z7CILFXpc24b2YMfDeCnSGGt2HjbviaJMmSA7CxrE2D7GqySQBgiV7oEH3mlwnYNQ1hzd2Uc1%2Fhvg3c4dRSp7GmPB9pnijIoYyVTASkTkHdg0TbBImhYI192%2Flxd%2F%2FN323x%2F3MP0yoUuBZjxtZSOe1IHA6mFRZM8IZhuOK9SdqSpTIJ99NfjA0yNq1yZwAEMLpeqhz0eYOdtw4adD5i%2BIm8bcpyBpqDI6%2FU2yMS%2FyP74c%2BSUmoRk4TPVXWJTtLni1Nvd2z8ZjXbHeyfi5hcKTvfzMgIAAA%3D%3D";

export function ShopExamples() {
  return (
    <>
      <div className="">
        <h3 className="text-sm tracking-wider text-gray-600">Exempel</h3>
        <div className="flex gap-1">
          <Button className="w-full" as="a" href={`/shop/${marketID}`}>
            🌿 Marknad
          </Button>
          <Button className="w-full" as="a" href={`/shop/${demoID}`}>
            ☕ Café
          </Button>
          <Button className="w-full" as="a" href={`/shop/${eventID}`}>
            🎶 Event
          </Button>
          <Button className="w-full" as="a" href={`/shop/${foodtruckID}`}>
            🚚 Food-truck
          </Button>
        </div>
      </div>
      <div className="py-16">
        <div className="flex flex-col items-center gap-8 justify-center">
          <a
            href={`/shop/${demoID}`}
            target="_blank"
            className="border-2 border-primary-200 rounded-2xl shadow hover:border-primary-400 hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <Image
              className="rounded-xl"
              alt="Swisher screenshot"
              width={375}
              height={480}
              src={`/swisher_screenshot.png`}
            />
          </a>
          <div className="text-sm text-gray-700 tracking-widest">
            Eller skanna QR-koden
          </div>
          <ShopQR encoded={demoID} />
        </div>
      </div>
    </>
  );
}
