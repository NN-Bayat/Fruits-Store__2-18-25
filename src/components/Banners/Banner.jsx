import React from "react";
import BannerPng from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";

const Banner = () => {
  return (
    <section>
      <div className="container">
        {/* Banner Image */}
        <div>
          <img
            src={BannerPng}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full object-cover"
          />
        </div>
        {/* Brand Info */}
        <div>
          <div>
            <h1>Brand Info</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              voluptas, nisi aspernatur quidem libero exercitationem recusandae
              dignissimos ab cumque eum accusamus nostrum adipisci possimus in
              accusantium laudantium et! Quo, fuga?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
