import React from 'react'
import ban from "../../../Assets/img/bannerImg/bn.png";
import Style from "../../../Styles/Styles";
import "./Banner2.scss";

const Banner2 = ({bannerData}) => {
  // console.log(bannerData)
  return (
    <div className={`1350px:w-[81.5%] 1280px:w-[83%] w-[98%] 1350px:mx-auto  bannerContainer`}>
      <div className="imgContainer">
      <img src={process.env.REACT_APP_IMG_URL+bannerData?.banner_images?.[0]?.images} alt="" />
      </div>
    </div>
  )
}

export default Banner2
