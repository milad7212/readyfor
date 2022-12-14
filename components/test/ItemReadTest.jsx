import React, { useState } from "react";
import BookMarkIcon from "../icons/BookMarkIcon";
import EraserIcon from "../icons/EraserIcon";
import LeftIcon from "../icons/LeftIcon";
import RightIcon from "../icons/RightIcon";

function ItemReadTest({
  data,
  changeQuestion,
  selectAnsQuestion,
  indexQuestion,
  deletedAnsQuestion,
  bookedAnsQuestion,
}) {
  const {
    number,
    option1,
    option2,
    option3,
    option4,
    title,
    correctOption,
    paragraph,
    page,
  } = data;

  function onChangeValue(event) {
    selectAnsQuestion(event.target.value, indexQuestion);
  }
  function classForCorrectAns(witchOption){
    if(witchOption == correctOption){
      return 'shadow-test rounded-lg  bg-ciGreen px-4 py-2 text-justify text-sm font-bold'
    }else{
      return ''
    }

  }

  return (
    <div className="relative m-2 mx-auto max-w-5xl rounded-lg bg-ciForeground p-3 shadow-md md:p-4 ">
      <p className="my-4  text-justify text-sm font-bold md:text-base">
        {data.question}
      </p>

      <div
        className=" mb-4 flex flex-col   gap-4 py-2"
        onChange={() => onChangeValue(event)}
      >
        <div className="flex ">
          <p
            className={classForCorrectAns(1)}
          >
            1. {option1}
          </p>
        </div>
        <div className="flex text-justify text-sm">
          <p className={classForCorrectAns(2)}>2. {option2}</p>
        </div>
        <div className="flex text-justify text-sm">
          <p  className= {classForCorrectAns(3)}>3. {option3}</p>
        </div>
        <div className="flex text-justify text-sm">
          <p  className={classForCorrectAns(4)}>4. {option4}</p>
        </div>
      </div>
      <div className="my-3 flex justify-between">
        <div className="shadow-page  rounded-lg bg-gray-200 px-3 py-2">
          <span className="ml-2 text-xs font-bold">صفحه</span>
          <span className="font-bold">{page}</span>
        </div>
        <div className="shadow-page  whitespace-nowrap rounded-lg bg-gray-200 px-3 py-2">
          <span className="ml-2 text-xs font-bold">بند</span>
          <span className="font-bold">{paragraph}</span>
        </div>
        <div className="shadow-page  rounded-lg bg-gray-200 px-3 py-2 ">
          <span className="ml-2 text-xs font-bold">{title}</span>
        </div>
      </div>
      <div className="flex  items-center ">
        <RightIcon
          className="text-ciCurrentLine "
          onClick={() => {
            changeQuestion(1);
          }}
        />
        <LeftIcon
          className={`${number == 1 ? "text-ciTiter " : "text-ciCurrentLine"}`}
          onClick={() => changeQuestion(-1)}
        />

        <BookMarkIcon
          onClick={() => bookedAnsQuestion(indexQuestion)}
          className={` mr-auto duration-200 ease-in active:scale-90 ${
            data.booked ? "fill-ciOrange" : ""
          }`}
        />
      </div>

      <div className="absolute right-0 left-0 -bottom-4 flex justify-center">
        <p className="flex h-8 w-8 items-center justify-center rounded-full border border-ciTiter bg-ciForeground p-4 font-bold shadow-2xl">
          {data.number}
        </p>
      </div>
    </div>
  );
}

export default ItemReadTest;
