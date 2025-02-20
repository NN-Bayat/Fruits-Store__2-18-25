import React from "react";
import BannerPng from "../../assets/fruit-plate2.png";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "../../utility/animation";

const Banner2 = () => {
  return (
    <section className="">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              {" "}
              Online Fruit Store
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              voluptas, nisi aspernatur quidem libero exercitationem recusandae
              dignissimos ab cumque eum accusamus nostrum adipisci possimus in
              accusantium laudantium et! Quo, fuga?
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi aspernatur consequatur architecto, ea impedit iusto?
            </motion.p>
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Download the App</button>
            </motion.div>
          </div>
        </div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 15,
              mass: 0.8,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            src={BannerPng}
            alt=""
            className="w-[300px] md:w-[400px] md:max-w-[450px] drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
