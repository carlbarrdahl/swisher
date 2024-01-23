import { tv } from "tailwind-variants";
import { createComponent } from ".";

export const Button = createComponent(
  "button",
  tv({
    base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants: {
      variant: {
        primary: "bg-primary-200 text-primary-900 hover:bg-primary-300/80 ",
        default: "bg-gray-100 hover:bg-gray-200/80 text-gray-900",
        ghost: "hover:bg-gray-200/80 text-gray-900",
      },
      size: {
        md: "h-10 px-4 py-2",
        lg: "px-4 py-3 text-base font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  })
);
