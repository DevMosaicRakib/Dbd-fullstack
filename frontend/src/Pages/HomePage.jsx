import React from 'react'
import BannerSlider from "../HomePageLayout/Slider/BannerSlider.jsx";
import EndLine from '../HomePageLayout/Layout/BannerEndLine/EndLine.jsx';
import MonitorArm from '../HomePageLayout/Layout/MonitorArmCategory/MonitorArm.jsx';
import BannerArea from "../HomePageLayout/Layout/BannerArea/BannerAre.jsx"
import HomeDecor from "../HomePageLayout/Layout/Home&Decor/HomeDecor.jsx";
import Banner2 from "../HomePageLayout/Layout/Banner2/Banner2.jsx";
import CategoryProductSection from "../HomePageLayout/Layout/CatProdSection/CatProdSec.jsx";
import ServiceBanner from "../HomePageLayout/Layout/ServiceBanner/ServiceBanner.jsx";
import useFetch from '../customHooks/useFetch.js';


const HomePage = ({open,setOpen,count,decrementQuantity,incrementQuantity,categories}) => {
  const homeData = useFetch('api/home/');
  const allProductData = useFetch('api/products/');
  // console.log(homeData)
  // Show a loading state until the data is available
  if (!homeData) {
    return <div>Loading...</div>;
  }

  // Check if `homeData` has the required properties
  const { product_section: productSections = [], banner_section: bannerSections = [] } = homeData[0] || {};

  // Merge product and banner sections sequentially
  const mergeSections = (productSections, bannerSections) => {
    let mergedArray = [];
    let maxLength = Math.max(productSections.length, bannerSections.length);

    for (let i = 0; i < maxLength; i++) {
      if (productSections[i]) {
        mergedArray.push({ type: 'product', data: productSections[i] });
      }
      if (bannerSections[i]) {
        mergedArray.push({ type: 'banner', data: bannerSections[i] });
      }
    }

    return mergedArray;
  };

  const mergedSections = mergeSections(productSections, bannerSections);
  // console.log(mergedSections)
  return (
    <div>
      <BannerSlider categories={categories}/>
      <EndLine/>
      {mergedSections.map((section, index) => {
        if (section.type === 'product') {
          switch (section.data.product_section_type) {
            case 'normal':
              return (
                <div className='mt-[20px]'>
                <MonitorArm
                  key={index}
                  open={open}
                  setOpen={setOpen}
                  count={count}
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                  product_section_data = {section.data}
                  allProductData = {allProductData}
                /></div>
              );
            case 'multiple':
              return <HomeDecor 
              key={index} 
              open={open} 
              setOpen={setOpen}
              product_section_data = {section.data}
              allProductData = {allProductData}
               />;
            case 'other':
              return <CategoryProductSection 
              key={index} 
              open={open} 
              setOpen={setOpen} 
              product_section_data = {section.data}
              allProductData = {allProductData}
              />;
            default:
              return null; // You can handle other product sections here if necessary
          }
        } else if (section.type === 'banner') {
          switch (section.data.banner_type) {
            case 'normal':
              return <BannerArea key={index} bannerData={section.data}/>;
            case 'logo':
              return <Banner2 key={index} bannerData={section.data}/>;
            case 'service':
              return <ServiceBanner key={index} bannerData={section.data}/>;
            default:
              return null; // You can handle other banner sections here if necessary
          }
        }
        return null;
      })}        
    </div>
  )
}

export default HomePage
