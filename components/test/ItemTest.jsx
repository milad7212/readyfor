import React from "react";

function ItemTest({ data }) {
  const { option1, option2, option3, option4 } = data;
  return (
    <div className="p-4 relative bg-ciForeground rounded-lg shadow-md max-w-5xl mx-auto ">
      <p className="my-4  font-bold">{data.question}</p>

      <div
        className=" flex flex-col gap-4   py-6 mb-4"
        onChange={() => onChangeValue(event)}
      >
        <div className="flex">
          <input className="mx-1" type="radio" value="1" name="info" />
          <p className="ml-3">{option1.text}</p>
        </div>
        <div className="flex">
          <input className="mx-1" type="radio" value="2" name="info" />
          <p className="ml-3">{option2.text}</p>
        </div>
        <div className="flex">
          <input className="mx-1" type="radio" value="3" name="info" />{" "}
          <p className="">{option3.text}</p>
        </div>
        <div className="flex">
          <input className="mx-1" type="radio" value="3" name="info" />{" "}
          <p className="">{option4.text}</p>
        </div>
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
