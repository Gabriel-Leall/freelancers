import { cn } from "@/lib/utils"
export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("inline-flex items-center rounded-full bg-gold-500/15 text-gold-500 px-3 py-1 text-xs font-semibold tracking-widest uppercase", className)} {...props} />
}
