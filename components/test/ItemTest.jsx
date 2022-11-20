import React, { useState } from "react";
import BookMarkIcon from "../../components/icons/BookMarkIcon";
import EraserIcon from "../../components/icons/EraserIcon";
import LeftIcon from "../../components/icons/LeftIcon";
import RightIcon from "../../components/icons/RightIcon";

function ItemTest({
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
    <div className="p-2 mb-2 md:p-4 relative bg-ciForeground rounded-lg shadow-md max-w-5xl mx-auto ">
      <p className="my-4  text-sm md:text-base text-justify font-bold">{data.question}</p>

      <div
        className=" flex flex-col gap-4 py-2  md:py-6 mb-4"
        onChange={() => onChangeValue(event)}
      >
        <div className="flex">
          <input
            className="mx-1"
            type="radio"
            value="1"
            name={`test_${data.number}_question`}
            checked={data.answer==1}
            
          />
          <p className="ml-3 text-sm md:text-base">{option1.text}</p>
        </div>
        <div className="flex">
          <input
            className="mx-1"
            type="radio"
            value="2"
            checked={data.answer==2}
            
            name={`test_${data.number}_question`}
          />
          <p className="ml-3 text-sm md:text-base" >{option2.text}</p>
        </div>
        <div className="flex">
          <input
            className="mx-1"
            type="radio"
            value="3"
            checked={data.answer==3}
            name={`test_${data.number}_question`}
          />{" "}
          <p className="ml-3 text-sm md:text-base">{option3.text}</p>
        </div>
        <div className="flex">
          <input
            className="mx-1"
            type="radio"
            value="4"
            checked={data.answer==4}
            name={`test_${data.number}_question`}
          />{" "}
          <p className="ml-3 text-sm md:text-base">{option4.text}</p>
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
        <EraserIcon
          className="mr-8"
          onClick={() => deletedAnsQuestion(indexQuestion)}
        />
        <BookMarkIcon
          onClick={() => bookedAnsQuestion(indexQuestion)}
          className={`mr-auto active:scale-90 duration-200 ease-in  ${
            data.booked ? "fill-ciOrange" : ""
          }`}
        />
      </div>

      <div className="flex justify-center absolute right-0 left-0 -bottom-4">
        <p className="bg-ciForeground border flex justify-center font-bold items-center shadow-2xl w-8 h-8 rounded-full p-4">
          {data.number}
        </p>
      </div>
    </div>
  );
}

export default ItemTest;
