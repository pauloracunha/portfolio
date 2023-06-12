import React from "react";

export default function Paragraph({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & { children: React.ReactNode }): JSX.IntrinsicElements['p'] {
  return <p {...props}>{children}</p>;
}
