import React , { useState } from "react";

import ItemTest from "../../components/test/ItemTest";
import {testsData} from "../../data/data"
function TestPage() {
    const [witchQuestion, setWitchQuestion] = useState(0)
    
  return (
    <div className=" min-h-screen bg-ciBackground p-4 relative flex justify-center items-center">
      <p className=  "absolute right-0 top-0 p-4 text-ciTiter">آزمون عمران اجرا اردیبهشت 97</p>
      <div className="absolute left-0 top-0 text-ciTiter flex p-4">
        <p className="ml-4">زمان باقی مانده :</p>
        <p className="text-ciForeground font-bold">2:54:36</p>
      </div>
      
      <ItemTest data={testsData[witchQuestion]}/>
    </div>
  );
}

export default TestPage;
