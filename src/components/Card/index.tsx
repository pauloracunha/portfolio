import React from "react";
import { ArticleProps } from "../Article";

export interface CardProps extends ArticleProps {
  tags?: string[];
}

export default function Card({ title, children, tags, ...props }: CardProps) {
  props.className = `max-w-sm rounded overflow-hidden shadow-lg ${props.className}`;
  return (
    <article {...props}>
      <div className="px-6 py-4">
        <h2 className="font-bold text-2xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{children}</p>
      </div>
      <div className="px-6 py-4">
        {tags &&
          tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              {tag}
            </span>
          ))}
      </div>
    </article>
  );
}
