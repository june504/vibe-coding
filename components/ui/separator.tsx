import * as React from "react";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <div
    ref={ref}
    role="none"
    aria-orientation={orientation}
    data-orientation={orientation}
    className={cn(
      "shrink-0 bg-zinc-200 dark:bg-zinc-800",
      orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
      className
    )}
    data-decorative={decorative}
    {...props}
  />
));
Separator.displayName = "Separator";

export { Separator };

