import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css"; // Import animate.css

function HeroSlider() {
  return (
    <div className="hero-slider">
      {" "}
      {/* Added a wrapper div */}
      <ScrollAnimation animateIn="wobble" initiallyVisible={true}>
        <div className="carousel w-full h-[90vh] relative overflow-hidden">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://media.istockphoto.com/id/1312767508/photo/businessman-using-tablet-online-banking-exchange-currency-and-payment-digital-marketing.jpg?s=1024x1024&w=is&k=20&c=t-ZZpFD6fo85F5SFe636jKTCn7UoE7HmLUAz-i3WzI0="
              className="w-full h-full object-cover"
              alt="Businessman using tablet"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/0 to-black/60"></div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
              <a
                href="#slide4"
                className="btn btn-circle bg-gray-800 hover:bg-gray-700"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle bg-gray-800 hover:bg-gray-700"
              >
                ❯
              </a>
            </div>
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-3xl font-bold">Seamless Online Banking</h2>
              <p className="mt-2">
                Experience a secure and fast way to manage your digital assets.
              </p>
            </div>
          </div>

          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://media.istockphoto.com/id/1388597365/photo/crypto-whale-bitcoin-cryptocurrency-large-investor-holding-coin-asset.jpg?s=1024x1024&w=is&k=20&c=JckZGgKxcUARx7N6mONy1qNOSNciI0WDruWVc55fnbw="
              className="w-full h-full object-cover"
              alt="Crypto Whale Bitcoin"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/0 to-black/60"></div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
              <a
                href="#slide1"
                className="btn btn-circle bg-gray-800 hover:bg-gray-700"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-circle bg-gray-800 hover:bg-gray-700"
              >
                ❯
              </a>
            </div>
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-3xl font-bold">
                Master Cryptocurrency Trading
              </h2>
              <p className="mt-2">
                Empower yourself with the tools to trade confidently.
              </p>
            </div>
          </div>

          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://images.unsplash.com/photo-1639754390580-2e7437267698?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover"
              alt="Trading platform"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/0 to-black/60"></div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
              <a
                href="#slide2"
                className="btn btn-circle bg-gray-800 hover:bg-gray-700"
              >
                ❮
              </a>
              <a
                href="#slide4"
                className="btn btn-circle bg-gray-800 hover:bg-gray-700"
              >
                ❯
              </a>
            </div>
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-3xl font-bold">Stay Ahead of the Curve</h2>
              <p className="mt-2">
                Access the latest market trends and news with ease.
              </p>
            </div>
          </div>

          {/* Slide 4 */}
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://images.unsplash.com/photo-1639825132131-cdb32a6c43d9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover"
              alt="Secure Trading"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/0 to-black/60"></div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
              <a
                href="#slide3"
                className="btn btn-circle bg-gray-800 hover:bg-gray-700"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-circle bg-gray-800 hover:bg-gray-700"
              >
                ❯
              </a>
            </div>
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-3xl font-bold">Your Secure Wallet</h2>
              <p className="mt-2">
                Store, trade, and manage your cryptocurrencies safely.
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default HeroSlider;
