import React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
  fullWidth?: boolean;
  backgroundClassName?: string;
}

// Helper function to merge classnames
const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      title,
      description,
      containerClassName,
      titleClassName,
      descriptionClassName,
      contentClassName,
      fullWidth = false,
      backgroundClassName,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative py-12 md:py-16 lg:py-20",
          backgroundClassName,
          className
        )}
        {...props}
      >
        <div
          className={cn(
            fullWidth ? "w-full" : "container mx-auto px-4 md:px-6",
            containerClassName
          )}
        >
          {(title || description) && (
            <div className="mb-10 space-y-2 md:mb-16">
              {title && (
                <h2
                  className={cn(
                    "text-3xl font-bold tracking-tight text-foreground md:text-4xl",
                    titleClassName
                  )}
                >
                  {title}
                </h2>
              )}
              {description && (
                <p
                  className={cn(
                    "max-w-3xl text-lg text-muted",
                    descriptionClassName
                  )}
                >
                  {description}
                </p>
              )}
            </div>
          )}
          <div className={cn("", contentClassName)}>{children}</div>
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
