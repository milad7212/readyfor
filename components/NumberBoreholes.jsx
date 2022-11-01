import React, { useState } from "react";

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
    setBoreholesData({...boreholesData,importance:event.target.value})
    
  }
  return (
    <div className="bg-gray-400 min-h-screen my-4">
      <div className="flex justify-center">
        <p className=""> تعداد گمانه : </p>
        <p className="">
          {calculateBoreholes(boreholesData.Area, boreholesData.importance)}
        </p>
      </div>
      <p className="">مساحت زمین</p>
      <input
      value={boreholesData.countBoreholes}
      onChange={(e)=>setBoreholesData({...boreholesData,countBoreholes:e.target.value})}
        className="bg-gray-50 outline-none   border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
      />
      <p className="">اهمیت ساختمان</p>
      <div className="flex" onChange={() => onChangeValue(event)}>
        <input type="radio" value="1" name="info" />
        <p className="">خیلی زیاد و زیاد</p>
        <input type="radio" value="2" name="info" />
        <p className="">متوسط</p>
        <input type="radio" value="3" name="info" /> <p className="">کم</p>
      </div>
    </div>
  );
}

export default NumberBoreholes;
function isNumber(val) {
  return val === +val;
}

const calculateBoreholes = (Area, ImportanceOfLand) => {
  if (!isNumber(Area)) return;

  if (Area < 300) {
    if (ImportanceOfLand == 1) return 3;
    if (ImportanceOfLand == 2) return 2;
    if (ImportanceOfLand == 3) return 1;
    return;
  }
  if (300 <= Area <= 1000) {
    if (ImportanceOfLand == 1) return 4;
    if (ImportanceOfLand == 2) return 3;
    if (ImportanceOfLand == 3) return 2;
    return;
  }
  if (Area > 1000) {
    const extraBore = ((Area - 1000) / 1000) * 2;
    if (ImportanceOfLand == 1) return extraBore;
    if (ImportanceOfLand == 2) return  extraBore;
    if (ImportanceOfLand == 3) return  extraBore;
    return;
  }
};
