import Image from "next/image";
import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/mobile.css";
function SearchDateForBooking() {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <div className="  mx-auto -my-2 max-w-6xl">
      <div className="relative mx-2 flex gap-2 items-center justify-between rounded-lg bg-[#13485C] p-2 md:p-4 md:pb-4 md:pt-4 pb-6 pt-10 shadow-xl">
        <h1 className="absolute top-2 right-2 md:top-0 md:right-0 md:relative font-bold text-white text-sm md:text-base whitespace-nowrap">تاریخ مراسم</h1>
        <div style={{ direction: "rtl" }}>
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            className="rmdp-mobile "
            placeholder="تاریخ را انتخاب نمایید."
            calendarPosition="bottom-right"
          />
        </div>
        <button className="whitespace-nowrap rounded-lg hover:bg-[#ffd35c] active:scale-95 border border-[#DBA129] bg-[#F9B730] py-3 px-4 md:px-8 font-bold">
          جستجو تالار{" "}
        </button>
      </div>
      {/* <Image src='/images/wedding/5.webp' width={200} height={200} /> */}
    </div>
  );
}

export default SearchDateForBooking;
