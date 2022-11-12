import React from "react";

function ShowText({ title, text, show }) {
  return (
    <div
      className={`my-8 ${show ? "  p-4" : "  h-0 overflow-hidden"} 
    duration-200 ease-linear 
     bg-ciForeground  shadow-md rounded-lg
     `}
    >
      <p className=" font-bold my-3">{title}</p>
      <p className="">{text}</p>
      {/* <p className="font-bold my-3">مثال :</p>
          <div className="flex  flex-wrap">
            {data.samples.map((item,index)=>(
              <span className="inline-block m-2 bg-ciOrange p-3 rounded-lg  " key={index}>{item}</span>
            ))}
          </div> */}
    </div>
  );
}

export default ShowText;
