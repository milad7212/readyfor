import React from "react";

function FindWorkerPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <Card />
      
    </div>
  );
}

export default FindWorkerPage;

function Card() {
  return (
    <>
      <div className="w-full p-4 bg-gray-100 rounded-xl shadow-md   grid grid-cols-12">
        <div className="  flex col-span-7">
          <div className="flex">
            <div className="w-32 h-32 shadow-xl bg-ciComment rounded-lg"></div>
            <div className="px-4">
                <p className="font-bold">میلاد حسنی</p>
                <ItemCart/>
                <ItemCart/>
                <ItemCart/>
                <ItemCart/>
                <ItemCart/>
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className="  col-span-5 p-4">
            <div className="aspect-video h-full rounded-xl bg-ciComment"></div>
        </div>
      </div>
    </>
  );
}

function ItemCart(){
    return(
        <>
        <div className="flex gap-8 mt-3">
                    <p className="text-ciGrayText text-sm">تدریس</p>
                    <p className=""> انگلیسی</p>
                </div>
        </>
    )
}