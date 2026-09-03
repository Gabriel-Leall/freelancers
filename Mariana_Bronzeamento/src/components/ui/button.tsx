import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-brown-900 text-cream-50 hover:bg-brown-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        gold: "bg-gold-500 text-brown-950 hover:bg-gold-400 shadow-md",
        outline: "border border-brown-900 text-brown-900 hover:bg-brown-900 hover:text-white",
        ghost: "text-brown-900 hover:bg-cream-100",
      },
      size: { default: "h-11 px-7 py-2", sm: "h-9 px-5", lg: "h-12 px-8 text-base", icon: "h-10 w-10" },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => (
  <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
))
Button.displayName = "Button"
export { Button, buttonVariants }
