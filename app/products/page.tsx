import React, { Suspense } from "react";
import { ProductListingPage } from "./detial";

const Productlistpage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductListingPage />
    </Suspense>
  );
};

export default Productlistpage;
