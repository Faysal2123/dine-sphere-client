import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const FeaturedDishes = () => {
  return (
    <div className="grid md:grid-cols-12 grid-cols-1">
      {/* Main Image Section */}
      <div className="col-span-4 relative flex justify-center w-full">
        <motion.img
          src="/img/resim7.jpg"
          className="w-full object-cover"
          alt=""
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <div className="absolute top-20 flex flex-col justify-center items-center">
          <motion.h1
            className="text-white md:text-3xl text-2xl font-semibold font-serif"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A history of restaurants
          </motion.h1>
          <motion.p
            className="text-white md:text-5xl text-3xl font-semibold pt-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            How Dining Out?
          </motion.p>
          <motion.p
            className="text-white md:text-5xl text-3xl font-semibold pt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Evolved Over Time
          </motion.p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="col-span-6 bg-black text-white md:space-y-10">
        {[1930, 1990, 2025].map((year, index) => (
          <motion.div
            key={index}
            className="md:flex justify-center items-center md:p-10 p-5 gap-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <div className="text-center md:text-start mb-4">
              <CountUp start={0} end={year} delay={0} separator="">
                {({ countUpRef }) => (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.4 }}
                  >
                    <span ref={countUpRef} className="md:text-5xl text-3xl transition-all duration-500 ease-out text-red-900" />
                  </motion.div>
                )}
              </CountUp>
            </div>
            <div>
              <motion.h1
                className="text-3xl font-semibold text-center md:text-start md:pt-3 pt-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.5 }}
              >
                {year === 1930 ? "Evolution of Restaurants" : year === 1990 ? "The Impact of Global Travel" : "Fine Dining & the Concept"}
              </motion.h1>
              <motion.p
                className="text-base pt-3 text-center md:text-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.6 }}
              >
                {year === 1930
                  ? "The 19th century saw significant changes in the restaurant industry. Industrialization and urbanization increased the demand for dining venues."
                  : year === 1990
                  ? "Global travel has significantly impacted restaurant menus by introducing diverse cuisines to new audiences. With increased travel, people developed a taste for international flavors."
                  : "Fine dining represents the pinnacle of culinary experiences, focusing on exceptional quality and presentation. Gourmet cuisine emphasizes fresh, high-quality ingredients."}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Side Images Section */}
      <div className="col-span-2 bg-black hidden sm:block">
        <div>
          {["/public/img/resim32.jpg", "/public/img/kebab-set-table 1.png", "/public/img/9.jpg"].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              className="p-6 rounded-xl h-60 w-full object-fill cursor-pointer"
              alt=""
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedDishes;
