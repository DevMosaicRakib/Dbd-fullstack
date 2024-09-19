import React, { useEffect, useState } from 'react';
// import Styles from "../../../Styles/Styles.js";
// import { productData } from "../../../Static/Data.js";
import "./CartProdSec.scss";
// import HdProductCard from '../../../components/HomeDecProCard/HdProductCard.jsx';
import CatSecProdCard from "../../../components/CatSecProCard/CatProdCard.jsx"
import image from "../../../Assets/img/ProductNotFound/img4.jpg"
// import useFetch from '../../../customHooks/useFetch.js';
const CatProdSec = ({open,setOpen, product_section_data, allProductData}) => {
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
  return (
    <div className='1350px:w-[81.5%] 1350px:mx-auto 1024px:w-[98%] 1280px:w-[83%] 
    w-[100%]   mx-auto catProdSection'>
    <div
      className={`w-full h-full catProdContainer`}>
      <div className={` text-start flex 300px:flex-col 300px:gap-[5px] 768px:flex-row 768px:gap-[30px] 1024px:gap-[40px]
      1350px:gap-[60px] 768px:items-center`}>
        <h1 className='font-[400]'>{product_section_data?.title}</h1>
        <div className="catsubCategories font-semibold 300px:overflow-x-scroll whitespace-nowrap scroll scroll-smooth 768px:overflow-x-hidden">
        {product_section_data?.category?.length !== 0 ? (
             <>
             {product_section_data?.category.map((cat,index)=>(
                  <span key={index}
                  onClick={() => handleCategoryClick(cat?.catname)}
                  className={`cursor-pointer ${
                    activeCategory === cat?.catname ? 'text-[#2fa7f1]' : 'text-[#fff]'
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

      <div>
    
       <div >
       {filteredProducts && filteredProducts?.length===0?(
          <div
          className={` catSecProductCard`}
        >
          <img src={image} alt="" className='w-full 1024px:h-[500px] h-full 1024px:object-cover object-contain'/>
        </div>
       ):(
          <div
          className={`grid grid-cols-2 gap-[6px] md:grid-cols-4 md:gap-[11px] 
         lg:grid-cols-5 lg:gap-[10px] xl:grid-cols-6 xl:gap-[11px] 1350px:gap-[13px] catSecProductCard`}
        >
          {filteredProducts && filteredProducts?.map((i, index) => <CatSecProdCard data={i} key={index} open={open} setOpen={setOpen}/>)}
        </div>
       )}
     </div>

      </div>
    </div>
  </div>
  )
}

export default CatProdSec
