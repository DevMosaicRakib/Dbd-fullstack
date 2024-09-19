import React, { useEffect, useState } from 'react'
import Style from "../../../Styles/Styles";
import "./HomeDecor.scss";
import pic from "../../../Assets/img/bannerImg/banner4.jpg"
import { productData } from '../../../Static/Data';
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct.jsx"
// import ProductCard from '../../../components/ProductCard/ProductCard.jsx';
import HdProductCard from "../../../components/HomeDecProCard/HdProductCard.jsx"
import image from "../../../Assets/img/ProductNotFound/img4.jpg";
import useFetch from '../../../customHooks/useFetch.js';
const HomeDecor = ({
  open,
  setOpen,
  product_section_data,
  allProductData
}) => {
  const hAndDAllData = useFetch('api/HomeDecorAll/');
  // console.log(hAndDAllData);
  const featuredData = useFetch('api/featuredproducts/')
  // console.log(featuredData)


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
    <div className={`1350px:w-[81.5%] 1350px:mx-auto 1024px:w-[98%] 1280px:w-[83%] 768px:mx-auto 
     ml-0 homeDecorContainer  1024px:p-[5px] p-[2px]`}>
      <div className="bannerAndFeatureSection ml-[10px] grid grid-cols-1">
        <div className="bannerPart">
            <img src={pic} alt="" />
            <h1 className='font-Roboto font-bold'>smart <br /> computing</h1>
            <button>Read more</button>
        </div>
        <div className="featuredPart">
          <h1 className='shadow-sm shadow-slate-500 font-[400]' >{featuredData?.[0]?.title}</h1>
          {featuredData?.length !== 0 ? (
            <div className="grid grid-cols-1 pb-[20px] 1500px:w-[90%] w-[92%] mx-auto">
              {featuredData?.[0]?.product && featuredData?.[0]?.product?.map((i,index)=>(
                <FeaturedProduct data={i} key={index} />
              ))}            
           </div>
          ):(
            <div className="text-[12px] text-[#242424] text-center">
              No products found !
            </div>
          )}
          
        </div>
      </div>
      <div className="homeDecorProductSection">
          <div className="headingSbcategory font-[400]">
              <h1>{product_section_data?.title}</h1>
          <div className="subCategories font-[400] 300px:overflow-x-scroll whitespace-nowrap no-scrollbar scroll-smooth 768px:overflow-x-hidden">
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

               <div>
               {filteredProducts && filteredProducts?.length===0?(
                         <div
                         className={`homeDecorProductCard`}
                       >
                         <img src={image} alt="" className='1024px:w-[1000px] w-full 1024px:h-[500px] h-full 
                         1024px:object-cover object-contain'/>
                       </div> 
                 ): (
                   <div className={`grid grid-cols-2 gap-[5px] md:grid-cols-5 md:gap-[3px] lg:grid-cols-6 
                   lg:gap-[10px] xl:grid-cols-5 xl:gap-[5px] 1350px:gap-[6px] homeDecorProductCard`}>
                     {filteredProducts?.map((item,index)=>(
                       <HdProductCard
                       data={item}
                       key={index}
                       open={open}
                       setOpen={setOpen}
                     />
                     ))}
                    </div>)}
                </div>
           </div>
      </div>
    </div>
  )
}

export default HomeDecor
