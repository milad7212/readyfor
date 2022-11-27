import { useRouter } from "next/router";
import React, { useState } from "react";
import { motion } from "framer-motion";
import HelpIcon from "../../components/icons/HelpIcon";
import Image from 'next/image'

function SelectTestPage() {
  const [witchTest, setWitchTest] = useState("");
  const [witchYear, setWitchYear] = useState("");
  const router = useRouter();
  return (
    <div className=" relative min-h-screen bg-ciBackground p-4  ">
      {/* <Divider name="حالت آزمون" />
      <div className="flex justify-center gap-4  md:justify-start">
        <ItemTest
          name="نظارت"
          id="1"
          active={witchTest}
          onClick={() => setWitchTest('1')}
        />
        <ItemTest
          name="اجرا"
          id="2"
          active={witchTest}
          onClick={() => setWitchTest('2')}
        />
        <ItemTest
          name="محاسبات"
          id="3"
          active={witchTest}
          onClick={() => setWitchTest('3')}
        />
      </div>
      {witchTest == '1' && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="my-16 mx-auto grid md:grid-cols-2"
        >
          <section className="flex flex-wrap justify-center gap-2 md:justify-start">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
              <>
                <div
                  onClick={() => setWitchYear(index + 1)}
                  className={`flex h-20 w-20 cursor-pointer flex-col
                  items-center justify-center rounded-lg ${
                    witchYear == index + 1 ? "bg-ciDribble" : "bg-ciTiter"
                  }  duration-100
                 ease-out 
                hover:bg-gray-300 active:scale-95`}
                >
                  <p className="font-bold">1399</p>
                  <p className="text-sm">خرداد ماه</p>
                </div>
              </>
            ))}
          </section>
          <section className="">
            {!witchYear && (
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex h-full flex-col items-center justify-center"
              >
                <p className=" animate-bounce text-3xl font-bold text-ciPink">
                  {" "}
                  10 آزمون بده ، قبولی
                </p>
              </motion.div>
            )}
            {witchYear && (
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="my-8 flex  h-full flex-col justify-between text-right md:my-0"
              >
                <p className=" font-bold  text-ciPink"> تعداد سوالات : 60</p>
                <p className=" font-bold  text-ciPink">
                  {" "}
                  زمان آزمون : 150 دقیقه
                </p>
                <p className=" font-bold  text-ciPink">
                  {" "}
                  حدنصاب قبولی : 50 درصد
                </p>
                <p className=" font-bold  text-ciPink">
                  استفاده از ماشین حساب مجاز
                </p>
                <p className=" font-bold  text-ciPink"> نمره منفی دارد</p>
                <button
                  onClick={() => router.push("/test/56852")}
                  className="mx-auto w-[90%] rounded-lg bg-ciOrange py-4 font-bold duration-200 ease-in hover:scale-105 hover:bg-ciGreen active:scale-95"
                >
                  شروع آزمون
                </button>
              </motion.div>
            )}
          </section>
        </motion.div>
      )} */}
      <Divider name="حالت مطالعه" />
      <HelpIcon />

      <section className="flex flex-wrap justify-center gap-2">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
          (item, index) => (
            <ItemBook key={index} index={index} />
          )
        )}
      </section>
    </div>
  );
}

export default SelectTestPage;

function ItemTest({ name, id, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${active == id ? "bg-ciGreen" : "bg-ciTiter"} flex h-16 w-16 
        cursor-pointer items-center justify-center rounded-lg 
         text-ciBackground shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-150 ease-in hover:scale-105 active:scale-95`}
    >
      <p className="font-bold">{name}</p>
    </div>
  );
}

function Divider({ name = "تقسیم کننده" }) {
  return (
    <div className="my-4 flex items-center">
      <span className="h-[2px] w-full rounded-lg bg-ciTiter"></span>
      <p className="mx-4 whitespace-nowrap font-bold text-ciTiter">{name}</p>
      <span className="h-[2px] w-full rounded-lg bg-ciTiter"></span>
    </div>
  );
}

function ItemBook({ index }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`test/book/${index + 1}`)}
      className=" relative flex cursor-pointer  flex-col items-center justify-center object-fill  filter duration-100 ease-out hover:brightness-150 active:scale-95
                  "
    >
      <div
        className="absolute top-0 right-0 flex h-7  w-7 items-center justify-center
                   rounded-md    bg-gray-300 shadow-lg  "
      >
        <span className="font-bold text-ciBackground">
          {Math.round(Math.random() * 20)}
        </span>
      </div>
      <img
        className="w-full rounded-xl"
        src={`/images/book/${index + 1}.jpg`}
        alt=""
      />
    </div>
  );
}
