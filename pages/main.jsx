import React from "react";
import { StudySteps } from "../data/data";

function main() {
  return (
    <div className=" min-h-screen bg-ciBackground p-4">
      <p className=" text-ciCyan font-bold text-xl">دفترچه خاک</p>

      {StudySteps.map((item, index) => (
        <div key={index} className="my-10">
            <p className="text-ciGreen font-bold">{item.title}  [ {item.children.length} ]</p>
            <div className="grid grid-cols-4 gap-x-2">
                {item.children.map((childItem,index)=>(
                    <div key={index} className="bg-ciForeground  rounded-lg my-2 p-4">
                        <p className="font-bold">{childItem.title}</p>
                    </div>
                ))}
            </div>
        </div>
      ))}
    </div>
  );
}

export default main;
