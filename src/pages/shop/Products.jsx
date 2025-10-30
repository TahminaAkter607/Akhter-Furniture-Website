import React, { useState } from "react";
import { products } from "../../utils/products";
import ProductCard from "./productCard";
import btnIcon from "../../assets/button-icon.png";

const Products = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectCategory, setSelectCategory] = useState("Chair");
  const [visibleProducts, setvisibleProducts] = useState(4);

  const filteredProducts = products.filter(
    (product) => product.category === selectCategory
  );

  const loadMoreProducts = () => {
    setvisibleProducts((prev) => prev + 4);
  };

  return (
    <div>
      <div className="section-container">
        <h2 className="text-4xl font-bold text-center my-8">{headline}</h2>

        {/* category tabs */}
        <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16">
          <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
            {categories.map((category) => (
              <button
                onClick={() => {
                  setSelectCategory(category);
                  setvisibleProducts(4);
                }}
                key={category}
                className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-orange-500 hover:text-white transition-colors ${
                  selectCategory === category
                    ? "bg-orange-500 text-white"
                    : "text-black"
                }`}>
                {category}
              </button>
            ))}
          </div>
        </div>
        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.slice(0, visibleProducts).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* load more button */}
        {visibleProducts < filteredProducts.length && (
          <div className="flex justify-center items-center mt-8">
            <button
              onClick={loadMoreProducts}
              className="text-lg font-semibold text-orange-500 flex items-center gap-10">
              View All
              <img src={btnIcon} alt="btn icon" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
