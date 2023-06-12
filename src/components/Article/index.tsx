import React from "react";

export interface ArticleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  title?: string;
  children: React.ReactNode;
}

export default function Article({ title, children, ...props }: ArticleProps) {
  return (
    <article {...props}>
      {title && (
        <header>
          <h3 className="text-4xl mb-6">{title}</h3>
        </header>
      )}
      {children}
    </article>
  );
}
