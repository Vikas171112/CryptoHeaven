import React from "react";
import BannerImage from "../Banner/banner.jpg";

function Banner() {
  return (
    <div className="w-[100%]  h-[20rem] relative z-20">
      <img className="w-full h-full" src={BannerImage} alt="" />
      <div className="absolute top-20 left-10 flex flex-col justify-center]">
        <div>
          <h4 className="font-extrabold text-orange-300 text-4xl left-20">
            CryptoHeaven
          </h4>
          <h6 className="text-orange-300 text-xl font-semibold">
            {" "}
            Get all info regarding cryptocurrencies
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Banner;
