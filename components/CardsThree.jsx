import React from "react";
import BackgroundWithAnimation from "./BackgroundWithAnimation";

function CardsThree() {
  return (
    <div className=" grid grid-cols-2 p-4">
      <BackgroundWithAnimation />
      <div className=" flex min-h-screen flex-col items-center justify-center bg-primary ">
        <div className=" flex items-center justify-center">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl shadow-lg transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full  object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
              <div className="absolute left-0 right-0 bottom-1 flex  flex-col items-center justify-center px-9 text-center transition-all duration-500 ">
                <h1 className="font-dmserif text-xl font-bold text-white">
                  تالار پذیرایی آرتا
                </h1>
              </div>
            </div>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl shadow-lg transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full  object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
              <div className="absolute left-0 right-0 bottom-1 flex  flex-col items-center justify-center px-9 text-center transition-all duration-500 ">
                <h1 className="font-dmserif text-xl font-bold text-white">
                  تالار عروسی تلاش
                </h1>
              </div>
            </div>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl shadow-lg transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full  object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
              <div className="absolute left-0 right-0 bottom-1 flex  flex-col items-center justify-center px-9 text-center transition-all duration-500 ">
                <h1 className="font-dmserif text-xl font-bold text-white">
                  تالار قصر کریمان کرمان
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <p className="font-com mt-6 text-center text-2xl font-semibold text-normalText">
            تعدادی از{" "}
            <a href="https://unsplash.com" className="text-PrimaryText">
              تالارهای شهر
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardsThree;
