"use client";
import React from "react";

type TabType = "TREND" | "NEW";

interface Props {
  activeTab: "TREND" | "NEW";
  onChange: (tab: "TREND" | "NEW") => void;
}

const ProductListNavbar = ({ activeTab, onChange }: Props) => {
  return (
    <ul className="w-full flex justify-center gap-4 font-bold">
      <li
        className={`cursor-pointer border-b-2 ${
          activeTab === "TREND" ? "border-red-700" : "border-transparent"
        }`}
        onClick={() => onChange("TREND")}
      >
        TREND
      </li>
      <li
        className={`cursor-pointer border-b-2 ${
          activeTab === "NEW" ? "border-red-700" : "border-transparent"
        }`}
        onClick={() => onChange("NEW")}
      >
        NEW
      </li>
    </ul>
  );
};

export default ProductListNavbar;
