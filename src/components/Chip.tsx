import React, { type ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
}

const Chip = ({ children }: ChipProps) => {
  return (
    <span className="bg-gray-100 px-3 py-2 rounded-full text-xs tracking-widest font-normal">
      {children}
    </span>
  );
};

export default Chip;
