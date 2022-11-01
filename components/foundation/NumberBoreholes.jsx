import React, { useState } from "react";
import { topicImportanceOfBuilding } from "../../data/data";

// for ImportantOfLand
// for lot =1
// for medium =2
// for low=1

function NumberBoreholes() {
  const [boreholesData, setBoreholesData] = useState({
    Area: 0,
    importance: "",
    countBoreholes: "",
  });

  function onChangeValue(event) {
    setBoreholesData({ ...boreholesData, importance: event.target.value });
  }
  function findItem() {
    return topicImportanceOfBuilding.find(
      (element) => element.importance == boreholesData.importance
    );
  }
  return (
    <div className="bg-gray-300 min-h-screen my-4 p-4 rounded-lg">
      <div className="flex justify-center ">
        <p className="font-bold bg-ciCyan p-3 rounded-lg shadow-md">
          حداقل تعداد گمانه مورد نیاز :{" "}
        </p>
        <p className="font-bold flex text-2xl justify-center bg-ciGreen p-3 px-5 mr-1 rounded-lg shadow-lg">
          {calculateBoreholes(boreholesData.Area, boreholesData.importance)}
        </p>
      </div>
      <div className="grid grid-cols-2 mt-6 gap-4">
        <div className="">
          <p className="font-bold mb-4">مساحت زمین</p>
          <input
            value={boreholesData.Area}
            onChange={(e) =>
              setBoreholesData({ ...boreholesData, Area: e.target.value })
            }
            placeholder="بر حسب متر مربع وارد نمایید."
            className="bg-gray-50 shadow-md outline-none   border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
          />
        </div>
        <div className="flex justify-between flex-col">
          <p className="font-bold mb-4">اهمیت ساختمان</p>
          <div
            className="flex font-semibold"
            onChange={() => onChangeValue(event)}
          >
            <input className="mx-1" type="radio" value="1" name="info" />
            <p className="ml-3">خیلی زیاد و زیاد</p>
            <input className="mx-1" type="radio" value="2" name="info" />
            <p className="ml-3">متوسط</p>
            <input className="mx-1" type="radio" value="3" name="info" />{" "}
            <p className="">کم</p>
          </div>
        </div>
      </div>
      {/* more Explain */}
      {findItem() && (
        <>
          <ShowItem data={findItem()} />
        </>
      )}
    </div>
  );
}

export default NumberBoreholes;

function calculateBoreholes(Area, ImportanceOfLand) {
  if (Area < 300) {
    if (ImportanceOfLand == 1) return 3;
    if (ImportanceOfLand == 2) return 2;
    if (ImportanceOfLand == 3) return 1;
    return;
  }
  if (300 <= Area && Area <= 1000) {
    if (ImportanceOfLand == 1) return 4;
    if (ImportanceOfLand == 2) return 3;
    if (ImportanceOfLand == 3) return 2;
    return;
  }
  console.log("Area", Area);
  console.log("Area >1000", Area > 1000);
  if (Area > 1000) {
    const extraBore = ((+Area - 1000) / 1000) * 2;
    if (ImportanceOfLand == 1) return 4 + extraBore;
    if (ImportanceOfLand == 2) return 3 + extraBore;
    if (ImportanceOfLand == 3) return 2 + extraBore;
    return;
  }
}

function ShowItem({ data }) {
  return <div className="my-8 bg-ciForeground p-4 rounded-lg">
    <p className=" font-bold my-3">{data.title}</p>
    <p className="">{data.explain}</p>
    <p className="font-bold my-3">مثال :</p>
    <div className="flex  flex-wrap">
      {data.samples.map((item,index)=>(
        <span className="inline-block m-2 bg-ciOrange p-3 rounded-lg  " key={index}>{item}</span>
      ))}
    </div>
    
    </div>;
}
