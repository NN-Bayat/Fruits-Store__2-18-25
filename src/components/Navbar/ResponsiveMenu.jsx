import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20 md:hidden"
        >
          <div className="text-md font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col items-center gap-10">
              <li className="cursor-pointer border-b-2 border-transparent hover:border-white transition">
                Home
              </li>
              <li className="cursor-pointer border-b-2 border-transparent hover:border-white transition">
                About
              </li>
              <li className="cursor-pointer border-b-2 border-transparent hover:border-white transition">
                Services
              </li>
              <li className="cursor-pointer border-b-2 border-transparent hover:border-white transition">
                Contact
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
