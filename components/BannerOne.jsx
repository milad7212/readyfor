import React from "react";

function BannerOne() {
  return (
    <div className="">
      <section className="py-8 ">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="rounded-lg bg-[#CE6070] shadow-xl px-7 py-6">
            <div className="flex flex-wrap">
              <div className="mb-10 w-full pt-6 md:mb-0 md:w-1/2">
                <h3 className="mb-1 text-2xl font-bold text-secondaryDark">
                  <span > در مراسم </span>
                  <span className="text-yellow-300  font-black mr-2">بدرخش</span>
                </h3>
                <p className="mb-8 text-sm font-medium text-secondaryDark md:mb-16">
                  تالارهایی که تخفیف زیاد گذاشتند رو ببین....
                </p>
                <a
                  className="flex items-center font-medium text-white"
                  href="#"
                >
                  
                  <span className="font-black cursor-pointer hover:scale-150 duration-200">تماشا</span>
                </a>
              </div>
              <div className="flex w-full items-center md:w-1/2">
                <img
                  className="mx-auto h-48 rounded-lg"
                  src="/images/wedding/8.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BannerOne;
