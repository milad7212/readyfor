import { useRouter } from "next/router";
import React, { useState } from "react";
import HelpIcon from "../../components/icons/HelpIcon";

function SelectTestPage() {
  const [witchTest, setWitchTest] = useState("");
  const router = useRouter();
  return (
    <div className=" min-h-screen bg-ciBackground p-4 relative  ">
      <Divider name="حالت آزمون"/>
      <div className="flex  gap-4">
        <ItemTest
          name="نظارت"
          id="1"
          active={witchTest}
          onClick={() => setWitchTest(1)}
        />
        <ItemTest
          name="اجرا"
          id="2"
          active={witchTest}
          onClick={() => setWitchTest(2)}
        />
        <ItemTest
          name="محاسبات"
          id="3"
          active={witchTest}
          onClick={() => setWitchTest(3)}
        />
      </div>
      <div className="grid grid-cols-2 my-16">
        <section className="flex flex-wrap gap-2">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
            (item, index) => (
              <>
                <div
                  className="w-20 h-20 bg-ciTiter flex justify-center
                  cursor-pointer hover:bg-gray-300 duration-100 ease-out active:scale-95
                 items-center 
                rounded-lg flex-col"
                >
                  <p className="font-bold">1399</p>
                  <p className="text-sm">خرداد ماه</p>
                </div>
              </>
            )
          )}
        </section>
        <section className="">
          {false && (
            <div className="flex items-center flex-col">
              <p className=" font-bold text-3xl text-ciPink">
                {" "}
                10 آزمون بده ، قبولی
              </p>
            </div>
          )}
          <div className="text-right flex flex-col justify-between h-full">
            <p className=" font-bold  text-ciPink"> تعداد سوالات : 60</p>
            <p className=" font-bold  text-ciPink"> زمان آزمون : 150 دقیقه</p>
            <p className=" font-bold  text-ciPink"> حدنصاب قبولی : 50 درصد</p>
            <p className=" font-bold  text-ciPink">
              استفاده از ماشین حساب مجاز
            </p>
            <p className=" font-bold  text-ciPink"> نمره منفی دارد</p>
            <button
              onClick={() => router.push("/test/56852")}
              className="w-[90%] mx-auto bg-ciOrange rounded-lg py-4 font-bold hover:bg-ciGreen duration-200 ease-in hover:scale-105 active:scale-95"
            >
              شروع آزمون
            </button>
          </div>
        </section>
      </div>
      <Divider name="حالت مطالعه"/>
      <HelpIcon/>
      <div className="">
        <section className="flex flex-wrap gap-2">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
            (item, index) => (
              <>
                <div
                  className="w-26 overflow-hidden    flex justify-center
                  cursor-pointer  duration-100 ease-out active:scale-95
                 items-center 
                rounded-xl flex-col
                filter hover:brightness-150
                "
                >
                  <img src={`/images/book/${index + 1}.jpg`} alt="" />
                </div>
              </>
            )
          )}
        </section>
      </div>
    </div>
  );
}

export default SelectTestPage;

function ItemTest({ name, id, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${
        active == id ? "bg-ciGreen" : "bg-ciTiter"
      } w-16 h-16 shadow-[0_3px_10px_rgb(0,0,0,0.2)] 
        cursor-pointer hover:scale-105 duration-150 ease-in 
         text-ciBackground rounded-lg active:scale-95 flex justify-center items-center`}
    >
      <p className="font-bold">{name}</p>
    </div>
  );
}

function Divider({name='تقسیم کننده'}) {
  return (
    <div className="flex items-center my-4">
      <span className="bg-ciTiter h-[2px] rounded-lg w-full"></span>
      <p className="mx-4 whitespace-nowrap text-ciTiter font-bold">{name}</p>
      <span className="bg-ciTiter h-[2px] rounded-lg w-full"></span>
    </div>
  );
}
