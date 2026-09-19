import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-xs font-semibold tracking-[1px] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-elan-green text-[#F5F0EA] shadow-sm hover:bg-[#1C2B24] hover:shadow-md",
        outline:
          "border border-elan-green/30 bg-transparent text-elan-green hover:bg-elan-green hover:text-[#F5F0EA]",
        secondary:
          "bg-elan-nude text-elan-text hover:bg-elan-nude/80",
        ghost:
          "hover:bg-elan-card text-elan-text hover:text-elan-green",
        link:
          "text-elan-green underline-offset-4 hover:underline lowercase font-normal tracking-normal text-sm",
        dark:
          "bg-[#26231F] text-[#F5F0EA] hover:bg-black",
      },
      size: {
        default: "h-11 px-7 py-2.5",
        sm: "h-9 rounded-full px-4 text-[11px]",
        lg: "h-13 rounded-full px-9 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
