import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

import Hero from "../Hero/Hero";
import FaQ from "../Accordian/FaQ";
import ContactUs from "../Contact/Contactus";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow px-4 py-8 md:px-8 lg:px-12">
        <ScrollAnimation animateIn="fadeIn" delay={500}>
          <Hero />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={300}>
          <FaQ />
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" delay={600} animateOnce>
          <ContactUs />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" delay={900} animateOnce>
          <Footer />
        </ScrollAnimation>
      </main>
    </div>
  );
}

export default Home;
