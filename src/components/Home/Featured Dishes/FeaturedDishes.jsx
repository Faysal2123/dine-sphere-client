import React from "react";
import CountUp from "react-countup";

const FeaturedDishes = () => {
  return (
    <div className="grid md:grid-cols-12 grid-cols-1 ">
      <div className="col-span-4 relative flex justify-center w-full">
        <img src="/img/resim7.jpg" className="w-full " alt="" />

        <div className="absolute top-20 flex flex-col justify-center items-center ">
          <h1 className="text-white md:text-3xl text-2xl font-semibold font-serif">
            A history of restaurants
          </h1>
          <p className="text-white md:text-5xl text-3xl font-semibold pt-5">
            How Dining Out?
          </p>
          <p className="text-white  md:text-5xl text-3xl font-semibold pt-2">
            Evolved Over Time
          </p>
        </div>
      </div>
      <div className="col-span-6 bg-black text-white md:space-y-10">
  <div className="md:flex justify-center items-center md:p-10 p-5 gap-10">
    <div className="text-center md:text-start mb-4">
      <CountUp start={0} end={1930} delay={0} separator="">
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} className="md:text-5xl text-3xl transition-all duration-500 ease-out text-red-900" />
          </div>
        )}
      </CountUp>
    </div>
    <div>
      <h1 className="text-3xl font-semibold text-center md:text-start md:pt-3 pt-0">Evolution of Restaurants</h1>
      <p className="text-base pt-3 text-center md:text-start">
        The 19th century saw significant changes in the restaurant industry. Industrialization and urbanization increased the demand for dining venues.
      </p>
    </div>
  </div>

  <div className="md:flex justify-center items-center md:p-10 p-5 md:gap-10 gap-5">
    <div className="text-center">
      <CountUp start={0} end={1990} delay={0} separator="">
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} className="md:text-5xl text-3xl transition-all duration-500 ease-out text-red-900" />
          </div>
        )}
      </CountUp>
    </div>
    <div>
      <h1 className="text-3xl font-semibold text-center md:text-start pt-3 md:pt-0">The Impact of Global Travel</h1>
      <p className="text-base pt-3 text-center md:text-start">
        Global travel has significantly impacted restaurant menus by introducing diverse cuisines to new audiences. With increased travel, people developed a taste for international flavors.
      </p>
    </div>
  </div>

  <div className="md:flex justify-center md:justify-start md:p-10 p-5 gap-10">
    <div className="text-center">
      <CountUp start={0} end={2025} delay={0} separator="">
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} className="md:text-5xl text-3xl transition-all duration-500 ease-out text-red-900" />
          </div>
        )}
      </CountUp>
    </div>
    <div>
      <h1 className="text-3xl font-semibold text-center md:text-start pt-3 md:pt-0">Fine Dining & the Concept</h1>
      <p className="text-base pt-3 text-center md:text-start">
        Fine dining represents the pinnacle of culinary experiences, focusing on exceptional quality and presentation. Gourmet cuisine emphasizes fresh, high-quality ingredients.
      </p>
    </div>
  </div>
</div>

      <div className="col-span-2 bg-black hidden sm:block" >
        <div>
          <img
            src="/public/img/resim32.jpg"
            className="p-6  rounded-xl"
            alt=""
          />
          <img
            src="/public/img/kebab-set-table 1.png"
            className="h-60 w-full object-fill p-6 rounded-xl"
            alt=""
          />
          <img         
            src="/public/img/9.jpg"
            className="h-60 w-full object-fill p-6 rounded-xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedDishes;
