import React from "react";
import Container from "../Container";

export default function Section({
  title,
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section {...props}>
      {title && (
        <header className="max-w-6xl m-auto">
          <h3 className="text-4xl mb-6">{title}</h3>
        </header>
      )}
      {children}
    </section>
  );
}
