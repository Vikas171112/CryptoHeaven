import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollAnimation from "react-animate-on-scroll";
import { useQuery } from "@tanstack/react-query";
import { getTrendingCoins } from "../Services/getTrendingCoins";
import { useNavigate } from "react-router-dom";

function TrendingSlider() {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["trendingCoins"],
    queryFn: getTrendingCoins,
    staleTime: 1000 * 60 * 5, // Optional: Cache data for 5 minutes
  });

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Render loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[20vh]">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  // Render error state
  if (isError) {
    return (
      <div className="text-center text-red-500">
        <p>Error fetching trending coins: {error.message}</p>
      </div>
    );
  }
  function gotoDetails(id) {
    navigate(`details/${id}`);
  }
  // Render slider with trending coins
  return (
    <div>
      <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h4 className="text-2xl font-bold mb-4">Trending Coins</h4>
          <div className="relative w-[100%] rounded-lg">
            <Slider {...settings}>
              {data.map((coin) => (
                <div
                  onClick={() => gotoDetails(coin.item.id)}
                  className="bg-gray-950 shadow-xl h-[35vh] text-white flex flex-col justify-between py-10"
                >
                  <div className="flex justify-center ">
                    <img className="h-15" src={coin.item.small} alt="" />
                  </div>
                  <div className="flex flex-col items-center">
                    <h4 className="text-xl">{coin.item.name}</h4>
                    <h6 className="text-green-500">{coin.item.symbol}</h6>
                    <h6 className="text-green-500">
                      {coin.item.market_cap_rank}
                    </h6>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default TrendingSlider;
