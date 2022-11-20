import React, { useState, useEffect } from "react";
import BookMarkIcon from "../../components/icons/BookMarkIcon";

import ItemTest from "../../components/test/ItemTest";
import { testsData } from "../../data/data";
function TestPage() {
  const [witchQuestion, setWitchQuestion] = useState(0);

  const [questions, setQuestions] = useState(testsData);

  // const buildItemsQuestions=new Array(testsData.length).

  // status for every question
  // answered
  // reminder
  // nothing
  // { number: item.number, status: "noting", correct: "", answer: "" };

  function changeQuestion(value) {
    let newTest = witchQuestion + value;
    if (newTest >= 0 && newTest < questions.length) {
      setWitchQuestion(newTest);
    }
  }
  function changeCertainQuestion(value) {
    setWitchQuestion(value);
  }

  function choiceStyle(value) {
    if (questions[value].answer && value == witchQuestion) {
      return "bg-ciGreen  -translate-y-1 ";
    }
    if (questions[value].answer) {
      return "bg-ciGreen  ";
    }
    if (value == witchQuestion) {
      return "bg-ciForeground shadow-lg  ";
    } else {
      return "bg-gray-300";
    }
  }

  function selectAnsQuestion(answer, indexQuestion) {
    let newQuestion = [...questions];
    newQuestion[indexQuestion] = {
      ...newQuestion[indexQuestion],
      answer: answer,
    };
    setQuestions(newQuestion);
  }

  function deletedAnsQuestion(indexQuestion) {
    let newQuestion = [...questions];
    newQuestion[indexQuestion] = {
      ...newQuestion[indexQuestion],
      answer: "",
    };
    setQuestions(newQuestion);
  }

  function bookedAnsQuestion(indexQuestion) {
    let newQuestion = [...questions];

    if (newQuestion[indexQuestion].booked) {
      newQuestion[indexQuestion] = {
        ...newQuestion[indexQuestion],
        booked: false,
      };
    } else {
      newQuestion[indexQuestion] = {
        ...newQuestion[indexQuestion],
        booked: true,
      };
    }
    console.log("newQuestion", newQuestion);
    setQuestions(newQuestion);
  }

  return (
    <div className=" relative flex min-h-screen flex-col items-center bg-ciBackground p-4 ">
      <p className="absolute right-0 text-xs md:text-base  top-0 p-4 text-ciTiter ">
        آزمون عمران اجرا اردیبهشت 97
      </p>
      <div className="absolute  left-0 top-0 items-center flex p-4 text-ciTiter">
        <p className="ml-4 text-xs md:text-base">زمان باقی مانده :</p>
        <p className="font-bold text-ciForeground">2:54:36</p>
      </div>
      <div
        className=" mt-4  md:mt-8 flex w-full  flex-wrap gap-1 py-4 h-32 overflow-y-scroll"
        style={{ direction: "ltr" }}
      >
        {questions.map((item, index) => (
          <span
            onClick={() => changeCertainQuestion(index)}
            key={index}
            className={`${choiceStyle(
              index
            )} relative flex  h-6 w-6 cursor-pointer items-center justify-center rounded-lg text-xs font-bold duration-100 active:scale-90`}
          >
            {index + 1}
            {item.booked && (
              <span className="absolute -top-4 left-0 right-0 flex justify-center">
                <BookMarkIcon className="h-3 w-3 fill-ciOrange " />
              </span>
            )}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <ItemTest
          data={questions[witchQuestion]}
          indexQuestion={witchQuestion}
          changeQuestion={changeQuestion}
          deletedAnsQuestion={deletedAnsQuestion}
          selectAnsQuestion={selectAnsQuestion}
          bookedAnsQuestion={bookedAnsQuestion}
        />
      </div>
    </div>
  );
}

export default TestPage;
