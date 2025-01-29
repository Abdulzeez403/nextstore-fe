import React, { Suspense } from "react";
import { ProductListingPage } from "./detial";

const Productlistpage = () => {
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <ProductListingPage />
    </Suspense>
  );
};

export default Productlistpage;
