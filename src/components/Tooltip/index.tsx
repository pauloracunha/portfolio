"use client";
import React from "react";
import { Tooltip as FlowbiteTooltip, TooltipProps } from "flowbite-react";

const Tooltip = ({ ...props }: TooltipProps) => {

  return (
    <FlowbiteTooltip {...props} />
  );
};

export default Tooltip;
