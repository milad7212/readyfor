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

  return (
    <div className=" min-h-screen bg-ciBackground p-4 relative flex justify-center items-center">
      <p className="absolute right-0 top-0 p-4 text-ciTiter">
        آزمون عمران اجرا اردیبهشت 97
      </p>
      <div className="absolute left-0 top-0 text-ciTiter flex p-4">
        <p className="ml-4">زمان باقی مانده :</p>
        <p className="text-ciForeground font-bold">2:54:36</p>
      </div>
      <div className=" absolute top-11 w-full flex  flex-wrap gap-1 p-4" style={{direction:'ltr'}}>
        {new Array(60).fill(1).map((item,index)=>(
          <span key={index} className="bg-gray-300 w-6 h-6 rounded-lg flex justify-center items-center text-xs font-bold">{index+1}</span>
        ))}
      </div>

      <ItemTest
        data={testsData[witchQuestion]}
        changeQuestion={changeQuestion}
      />
    </div>
  );
}

export default TestPage;
