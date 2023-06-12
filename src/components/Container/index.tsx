import React from "react";

export default function Container({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & { children: React.ReactNode }) {
  props.className = `${props.className} max-w-6xl m-auto`;
  return <div {...props}>{children}</div>;
}
