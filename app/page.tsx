import { MerchantForm } from "./_components/merchant-form";
import { Button } from "./_components/ui/Button";

/*
- Merchant opens page
- Merchant reads information about Swisher
- Merchant clicks Create Shop button
- Merchant configures Shop and Products (name, price, desc, image)
  - Stores in localStorage
- Merchant clicks button to save  
  - View QR
  - View Shop
    - Show edit button if local storage matches
- Customer scans QR
- Customer builds menu
- Customer clicks Pay and Swish opens



https://swisher/:shopId



*/

const demoURL =
  "H4sIAAAAAAAAA7WQwWoCQQyGXyXM2YO6K4W9lcXiA3gTD3EnC4tuZpnMHFT2DfQo9ObZm5c%2BQd%2BkT9BHaCx0WS30VpgJJH%2B%2B%2FCR7w1iTyUzudlvIYwM5lu8XMzAc6xV5VYZPSZKO9aVabbyzsQhissX%2BB%2F14PUHuypJIGyxJ4asmVI5VeibvGk8iZEGbfVUgO0DWTLrPKGBZ0MIt4HqDIFbrgmA1WNGxWLvIwWTJpB10xp%2Fn4xvMCX%2FZzsivcAPhW%2BrQ4T16gBcfq9DrGE0eB5l75KrXWVOPSP8kpqyrMjLUdNun7zRO%2FulU7bL9AtZEkm3UAQAA";
export default function Home() {
  return (
    <div className="bg-primary-300 flex flex-col flex-1 px-8 py-6">
      <h1 className="text-3xl text-center mb-4 font-semibold tracking-wider text-primary-800">
        Swisher
      </h1>

      <p className="leading-8 text-lg mb-8">
        Swisher är en micro-app för att skapa menyer där betalning sker genom
        Swish.
      </p>

      <div className="flex flex-col gap-1">
        <Button variant="" as="a" href={"/shop/new"}>
          Skapa en Shop
        </Button>
        <Button variant="ghost" as={"a"} href={`/shop/${demoURL}`}>
          Visa ett exempel
        </Button>
      </div>
    </div>
  );
}
