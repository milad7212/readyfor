import React, { useState } from "react";

import ItemTest from "../../components/test/ItemTest";
import { testsData } from "../../data/data";
function TestPage() {
  const [witchQuestion, setWitchQuestion] = useState(0);

  function changeQuestion(value) {
    let newTest= witchQuestion + value
    if(newTest>=0 && newTest<=60){
      setWitchQuestion(newTest)
    }
  }
  function changeCertainQuestion (value){
    setWitchQuestion(value)
  }

  function choiceStyle(value){
    if (value == witchQuestion){
      return 'bg-ciForeground shadow-lg  '
    }else{
      return 'bg-gray-300'
    }
  }

  return (
    <div className=" min-h-screen bg-ciBackground p-4 relative flex flex-col items-center ">
      <p className="absolute right-0  top-0 p-4 text-ciTiter ">
        آزمون عمران اجرا اردیبهشت 97
      </p>
      <div className="absolute left-0 top-0 text-ciTiter flex p-4">
        <p className="ml-4">زمان باقی مانده :</p>
        <p className="text-ciForeground font-bold">2:54:36</p>
      </div>
      <div className="  mt-8 w-full flex  flex-wrap gap-1 p-4" style={{direction:'ltr'}}>
        {new Array(60).fill(1).map((item,index)=>(
          <span onClick={()=>changeCertainQuestion(index)} key={index} className={`${choiceStyle(index)} w-6 h-6 rounded-lg flex justify-center items-center text-xs font-bold cursor-pointer`}>{index+1}</span>
        ))}
      </div>

      <div className="mt-6">
        <ItemTest
          data={testsData[witchQuestion]}
          changeQuestion={changeQuestion}
        />
      </div>
    </div>
  );
}

export default TestPage;
