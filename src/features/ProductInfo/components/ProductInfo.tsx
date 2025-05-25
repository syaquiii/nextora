import React from "react";
import { DataProductInfo } from "../data/productinfo";
import CardProductInfo from "./Card";

const ProductInfo = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 lg:gap-16 gap-6">
        {DataProductInfo.map((props) => (
          <CardProductInfo key={props.id} props={props} />
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
