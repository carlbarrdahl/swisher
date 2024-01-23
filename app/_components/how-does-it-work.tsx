import { A } from "./ui/A";

export const repoURL = "https://github.com/carlbarrdahl/swisher";

export function HowDoesItWork() {
  return (
    <details className="text-sm">
      <summary className="p-2 cursor-pointer text-right">
        Hur funkar det?
      </summary>

      <ol className="list-disc list-inside space-y-4 mb-8">
        <li>
          Shoppens information komprimeras till en text-sträng som får plats i
          en QR-kod.
        </li>
        <li>
          När koden skannas omvandlas text-strängen till ett objekt som
          innehåller Shoppens information och produkter som då kan visas på
          sidan.
        </li>
        <li>
          Din Shop sparas också lokalt på din mobil vilket gör att du kan
          redigera den i efterhand.
        </li>
        <li>
          Ett order-nummer genereras och används som meddelande i
          Swish-betalningen tillsammans med produkterna som valts.
        </li>
        <li>
          Användaren navigeras till en order-bekräftelse och Shop-ägaren kan se
          order-nummret i inkommande Swish-betalningar.
        </li>
        <li>
          <A href={repoURL} target="_blank">
            Läs mer om de tekniska detailjerna och sidans källkod.
          </A>
        </li>
      </ol>
    </details>
  );
}
