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
  const { number, option1, option2, option3, option4 } = data;

  function onChangeValue(event) {
    selectAnsQuestion(event.target.value, indexQuestion);
  }

  return (
    <div className="relative mx-auto max-w-5xl rounded-lg bg-ciForeground p-4 shadow-md ">
      <p className="my-4  font-bold">{data.question}</p>

      <div
        className=" mb-4 flex flex-col   gap-4 py-6"
        onChange={() => onChangeValue(event)}
      >
        <div className="flex">
          <input
            className="mx-1"
            type="radio"
            value="1"
            name={`test_${data.number}_question`}
            checked={data.answer == 1}
          />
          <p className="ml-3">{option1.text}</p>
        </div>
        <div className="flex">
          <input
            className="mx-1"
            type="radio"
            value="2"
            checked={data.answer == 2}
            name={`test_${data.number}_question`}
          />
          <p className="ml-3">{option2.text}</p>
        </div>
        <div className="flex">
          <input
            className="mx-1"
            type="radio"
            value="3"
            checked={data.answer == 3}
            name={`test_${data.number}_question`}
          />{" "}
          <p className="">{option3.text}</p>
        </div>
        <div className="flex">
          <input
            className="mx-1"
            type="radio"
            value="4"
            checked={data.answer == 4}
            name={`test_${data.number}_question`}
          />{" "}
          <p className="">{option4.text}</p>
        </div>
      </div>
      <div className="flex items-center ">
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
        {/* <EraserIcon
          className="mr-8"
          onClick={() => deletedAnsQuestion(indexQuestion)}
        /> */}
        <div className="shadow-page mx-4 rounded-lg px-3 py-2">
          <span className="ml-2 text-xs font-bold">صفحه</span>
          <span className="font-bold">28</span>
        </div>
        <div className="shadow-page mx-4 rounded-lg px-3 py-2">
          <span className="ml-2 text-xs font-bold">بند</span>
          <span className="font-bold">10-2-4-8-1</span>
        </div>
        <BookMarkIcon
          onClick={() => bookedAnsQuestion(indexQuestion)}
          className={`mr-auto duration-200 ease-in active:scale-90  ${
            data.booked ? "fill-ciOrange" : ""
          }`}
        />
      </div>

      <div className="absolute right-0 left-0 -bottom-4 flex justify-center">
        <p className="flex h-8 w-8 items-center justify-center rounded-full border bg-ciForeground p-4 font-bold shadow-2xl">
          {data.number}
        </p>
      </div>
    </div>
  );
}

export default ItemReadTest;
