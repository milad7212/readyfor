import { useRouter } from "next/router";
import React, { useState } from "react";

import ReadQuestions from "../../../components/test/ReadQuestions";
import { booksData } from "../../../data/data";

function BookPage() {
  const [witchStep, setWitchStep] = useState("1");
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="bg-gray-50">
      {witchStep == "1" && (
        <div className="">
          <div className="my-1 flex justify-center">
            <img src={`/images/book/${id}.jpg`} alt="" className="rounded-lg" />
          </div>
          <div className="mt-3 flex flex-col p-2">
            <h2 className="mb-4 text-2xl font-bold">ویژگی های کتاب</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Item
                title="منبع امتحانات"
                explain=" اجرا  -  نظارت  - محاسبات"
              />
              <Item title="تعداد سوالات آمده" explain=" 20 تا از 600" />
              <Item
                title="رتبه کتاب از لحاظ تعداد سوال آمده"
                explain="1 از 25"
              />
            </div>
          </div>
          <div className="mt-3 flex flex-col p-2">
            <h2 className="mb-4 text-2xl font-bold">صفحاتی که ازش سوال آمده</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <ItemPage number="10" title="2 سوال" explain="بند 1-2-3-4-5" />
              <ItemPage number="34" title="1 سوال" explain="بند 1-2-3-4-5" />
              <ItemPage number="42" title="3 سوال" explain="بند 1-2-3-4-5" />
            </div>
          </div>
          <div className="mt-3 flex flex-col p-2">
            <h2 className="mb-4 text-2xl font-bold">عملکرد کتاب در آزمون ها</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <ItemTest title="نظارت-98-شهریور" number="12" explain="3 سوال" />
              <ItemTest number="8" title="نظارت-98-شهریور" explain="3 سوال" />
              <ItemTest number="50" title="نظارت-98-شهریور" explain="3 سوال" />
            </div>
          </div>
        </div>
      )}
      {witchStep == "2" && (
        <div className={`   flex  min-h-screen  bg-ciBackground  `}>
          <div className="flex w-full justify-center p-4 ">
            <ReadQuestions />
          </div>
        </div>
      )}
      {witchStep=='1' && <div className="fixed bottom-0 left-0">
        <button onClick={()=>setWitchStep(2)} className="bg-ciBackBeauty m-2 p-3 text-ciForeground rounded-lg">شروع مطالعه</button>
      </div>}
    </div>
  );
}

export default BookPage;

function Item({ title = "title", explain = "explain" }) {
  return (
    <>
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
          12
        </div>
        <div className="mr-4">
          <h2 className=" text-sm text-gray-500">{title}</h2>
          <p className="mt-2 font-semibold">{explain}</p>
        </div>
      </div>
    </>
  );
}

function ItemPage({ title = "title", explain = "explain", number }) {
  return (
    <>
      <div className="flex items-start justify-between rounded-xl bg-white p-4 shadow-lg">
        <div className="flex">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-ciBackBeauty bg-ciPink font-black">
            {number}
          </div>
          <div className="mr-4">
            <h2 className=" text-sm text-gray-500">{title}</h2>
            <p className="mt-2 text-sm text-gray-900">{explain}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function ItemTest({ title = "title", explain = "explain", number = "" }) {
  return (
    <>
      <div className="flex items-start justify-between rounded-xl bg-white p-4 shadow-lg">
        <div className="flex">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-ciBackBeauty bg-ciYellow">
            <span className="font-bold">{number}</span>
            <span className="mr-[2px] text-xs">%</span>
          </div>
          <div className="mr-4">
            <h2 className=" text-sm text-gray-500">{title}</h2>
            <p className="mt-2 font-semibold">{explain}</p>
          </div>
        </div>
      </div>
    </>
  );
}
