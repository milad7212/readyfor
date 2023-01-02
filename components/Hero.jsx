import React from "react";
import Lottie from "lottie-react";
import LandingBanner from '../public/animations/landing-banner.json'
import marriageCouple from '../public/animations/marriageCouple.json'
function Hero() {
  return (
    <div style={{ direction: "ltr" }} className=" bg-primary p-4">
      <div className="relative overflow-hidden">
        <div className="mx-auto">
          <div className="relative z-10 py-8 sm:py-16 md:py-20 lg:w-1/2 lg:py-24">
            <div className="mx-auto px-4">
              <div className="text-right sm:text-center lg:text-right">
                <h2 className="text-4xl my-2 font-extrabold leading-none text-secondaryDark sm:text-5xl md:text-6xl">
                  با خیال راحت
                  <p className="relative text-PrimaryText ">ازدواج کن</p>
                </h2>
                <p className="mt-3 font-bold text-SecondaryText sm:mx-auto sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  تمام تالار های شهر اینجاست. میتونی ببینی و رزرو  کنی
                </p>
                <div className="mt-5 flex justify-center sm:mt-8 lg:justify-start">
                  {/* <ButtonPrimary
                    to="/enter"
                    icon="keyboard_arrow_right"
                    label="Start Life"
                  />
                  <ButtonSecondary
                    to="/about"
                    color="gray"
                    icon="play_circle_outline"
                    label="Learn How"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex items-center justify-center p-4 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          {/* <TranslateLeft>
          <Lottie :options="defaultOptions" :controls="false" className="w-full" />
        </TranslateLeft> */}
        <div className="h-full ">
        <Lottie animationData={marriageCouple} loop={true} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
