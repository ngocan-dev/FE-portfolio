import type { PropsWithChildren } from "react";

type SectionContainerProps = PropsWithChildren<{
  className?: string;
  id?: string;
}>;

export function SectionContainer({ children, className, id }: SectionContainerProps) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-8">{children}</div>
    </section>
  );
}
