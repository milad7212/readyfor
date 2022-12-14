import React, { useState } from "react";

import { testDatas } from "../../utils/Output";
import BookMarkIcon from "../icons/BookMarkIcon";
import ItemReadTest from "./ItemReadTest";

function ReadQuestions({ book }) {
  const [witchQuestion, setWitchQuestion] = useState(0);

  const [questions, setQuestions] = useState(testDatas?.[book] ?? []);

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
    if (value == witchQuestion) {
      return "bg-ciGreen shadow-lg -translate-y-1  ";
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
    <div className="">
      <div className="mt-1 md:mt-6">
        {!!questions.length && (
          <ItemReadTest
            data={questions[witchQuestion]}
            indexQuestion={witchQuestion}
            changeQuestion={changeQuestion}
            deletedAnsQuestion={deletedAnsQuestion}
            selectAnsQuestion={selectAnsQuestion}
            bookedAnsQuestion={bookedAnsQuestion}
          />
        )}
      </div>
      <div
        className=" mt-9  flex  w-full flex-wrap gap-1   md:mt-8"
        style={{ direction: "ltr" }}
      >
        {questions?.map((item, index) => (
          <span
            onClick={() => changeCertainQuestion(index)}
            key={index}
            className={`${choiceStyle(
              index
            )} relative flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg text-xs font-bold duration-100 active:scale-90`}
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
    </div>
  );
}

export default ReadQuestions;
