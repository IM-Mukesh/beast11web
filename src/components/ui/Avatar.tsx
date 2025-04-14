import React from "react";
import { cn } from "@/utils/cn";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
  status?: "online" | "offline" | "away" | "busy" | "none";
}

const statusColors = {
  online: "bg-green-500",
  offline: "bg-muted-400",
  away: "bg-yellow-500",
  busy: "bg-destructive",
  none: "hidden",
};

const sizeClasses = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-base",
  xl: "h-20 w-20 text-lg",
};

const statusSizeClasses = {
  sm: "right-0.5 top-0.5 h-2 w-2",
  md: "right-0 top-0 h-3 w-3",
  lg: "right-0 top-0 h-4 w-4",
  xl: "right-1 top-1 h-4 w-4",
};

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      src,
      alt = "",
      fallback,
      size = "md",
      status = "none",
      ...props
    },
    ref
  ) => {
    const initials = React.useMemo(() => {
      if (!fallback) return "";
      return fallback
        .split(" ")
        .map((name) => name[0])
        .join("")
        .toUpperCase()
        .substring(0, 2);
    }, [fallback]);

    const hasImage = src && src.length > 0;

    return (
      <div
        ref={ref}
        className={cn("relative flex-shrink-0", className)}
        {...props}
      >
        <div
          className={cn(
            "flex overflow-hidden rounded-full bg-muted-200",
            sizeClasses[size]
          )}
        >
          {hasImage ? (
            <img
              src={src}
              alt={alt}
              className="aspect-square h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-primary-100 text-primary">
              {initials}
            </div>
          )}
        </div>
        {status !== "none" && (
          <span
            className={cn(
              "absolute flex items-center justify-center rounded-full border-2 border-background",
              statusColors[status],
              statusSizeClasses[size]
            )}
            aria-hidden="true"
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar };
