import { tv } from "tailwind-variants";
import { createComponent } from ".";

export const Input = createComponent(
  "input",
  tv({
    base: "flex w-full h-10 border rounded p-2",
  })
);
