import React, { useEffect, useState } from "react";
import Styles from "../../../Styles/Styles.js";
import { productData } from "../../../Static/Data.js";
import ProductCard from "../../../components/ProductCard/ProductCard.jsx";
import "./MonitorArm.scss";
// import { Link } from 'react-router-dom';
import image from "../../../Assets/img/ProductNotFound/img4.jpg";
import useFetch from "../../../customHooks/useFetch.js";

const FeaturedProducts = ({
  open,
  setOpen,
  count,
  decrementQuantity,
  incrementQuantity,
  product_section_data,
  allProductData
}) => {
  // console.log(product_section_data)
  
  // console.log(allProductData);
  const [isClicked, setIsClicked] = useState(false);

  const [activeCategory, setActiveCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    // Ensure both data sets are available before auto-selecting
    if (allProductData?.length && product_section_data) {
      if (product_section_data?.category?.length > 0) {
        handleCategoryClick(product_section_data?.category[0]?.catname);
      } else if (product_section_data?.sub_category?.length > 0) {
        handleCategoryClick(product_section_data?.sub_category[0]?.subcatname);
      }
    }
  }, [product_section_data, allProductData]);
  
  const handleCategoryClick = (name) => {
    setActiveCategory(name);
  
    // Filter products based on clicked category or subcategory
    const filtered = allProductData?.filter((product) =>
      product?.Category?.catname === name || product?.Sub_category?.subcatname === name
    );
  
    setFilteredProducts(filtered || []);
  };
  // console.log(filteredProducts)

  return (
    <div>
      <div
        className={`1350px:w-[81.5%] 1350px:mx-auto 1280px:w-[83%] 1280px:mx-auto 1024px:w-[98%] w-[100%] mt-0 mx-auto
         p-[8px] 1024px:p-0 monitorArmCategory`}
      >
        <div
          className={` pb-[10px] flex 300px:flex-col
            768px:flex-row 768px:items-start 300px:gap-[10px] 768px:gap-[30px] 1024px:gap-[50px]`}
        >
          <h1 className="font-[400] text-[16px] text-[#242424] uppercase pl-[5px] 1024px:pl-0">
            {product_section_data?.title}
          </h1>

          <div
            className="subCategories
         300px:overflow-x-scroll whitespace-nowrap no-scrollbar scroll scroll-smooth 768px:overflow-x-hidden"
          >
            {product_section_data?.category?.length !== 0 ? (
             <>
             {product_section_data?.category.map((cat,index)=>(
                  <span key={index}
                  onClick={() => handleCategoryClick(cat?.catname)}
                  className={`cursor-pointer ${
                    activeCategory === cat?.catname ? 'text-[#077bc4]' : 'text-[#242424]'
                  }`}
                >
                  {cat?.catname}
                </span> 
             ))}            
             </>
            ):(
             <>
             {product_section_data?.sub_category.map((subcat,index)=>(
                  <span key={index}
                  onClick={() => handleCategoryClick(subcat?.subcatname)}
                  className={`cursor-pointer ${
                    activeCategory === subcat?.subcatname ? 'text-[#077bc4]' : 'text-[#242424]'
                  }`}
                >
                  {subcat?.subcatname}
                </span> 
             ))}            
             </>
            )}
            

          </div>
        </div>

        <div className="">
      
            <div
            >
                {filteredProducts?.length===0?(
                     <div className="overflow-hidden">
                     <img src={image} alt="" className="w-full h-full object-contain"/>
                   </div>
                ): (
                  <div  className={`grid grid-cols-2 gap-[3px] 
                  md:grid-cols-4 md:gap-[10px] lg:grid-cols-5 lg:gap-[16px] xl:grid-cols-6 xl:gap-[5px] 1350px:grid-cols-6 1350px:gap-[8px] monitorProductCard ${
                    isClicked
                      ? "monitorProductCardClicked"
                      : ""
                  }`}>
                     {filteredProducts?.map((item, index) => (
                  
                  <ProductCard
                    data={item}
                    key={index}
                    open={open}
                    setOpen={setOpen}
                    count={count}
                    decrementQuantity={decrementQuantity}
                    incrementQuantity={incrementQuantity}
                  />
                ))}
                  </div>)}
                 
             </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
