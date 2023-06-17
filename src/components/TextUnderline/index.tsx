import React from "react";
import bg from "../../assets/hero-name-mark-shape.webp";

function TextUnderline({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10">
      {children}
      <span
        className="absolute -z-10 w-full h-full left-0 bg-no-repeat bg-contain -bottom-full"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      ></span>
    </div>
  );
}

export default TextUnderline;
