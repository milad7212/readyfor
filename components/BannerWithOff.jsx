import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import marriageCouple from '../public/animations/loveHearts.json'
function BannerWithOff() {
  return (
    <div className="mx-auto max-w-7xl p-4">
      <div className="grid grid-cols-[2fr_5fr] ">
        <div className=" relative">
          <Image
            className="rounded-lg"
            src="/images/wedding/castel.webp"
            width={400}
            height={400}
            alt=""
          />
        </div>
        <div
          className="flex
        "
        >
          <div className="flex-1 relative flex justify-center items-center flex-col">
            <p className="text-secondaryDark font-bold text-2xl">تالاری که بیشترین تخفیف را گذاشته</p>
            <p className="mt-4 text-normalText">از بین تمام تالارها تنها یک تالار میتواند در این جایگاه قرار بگیرد که بیشترین تخفیف را نسبت به دیگر تالار ها بگذارید</p>
            <div className="w-44 h-44 absolute bottom-0 left-0 ">
        <Lottie animationData={marriageCouple} loop={true} />
        </div>
          </div>
          <div
            style={{ writingMode: "vertical-rl" }}
            className="flex w-20  items-center justify-center rounded-lg bg-gray-800 shadow-2xl"
          >
            <div className="rotate-180 text-2xl font-bold text-white">
              <span className="animate-pulse text-3xl ">50 </span>
              <span className="text-sm">%</span>
              <span className=" mb-3">تخفیف</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerWithOff;
