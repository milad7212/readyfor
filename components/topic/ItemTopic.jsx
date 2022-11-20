import React from "react";

function ItemTopic() {
  return (
    <div className="p-4 relative bg-ciForeground rounded-lg shadow-md max-w-5xl mx-auto ">
      <p className="">
        <span className="font-bold">مبحث</span>
        <span className="text-sm mr-2">۷-۲-۳-۲-۱-۶</span>
      </p>
      <p className="my-4 font-bold">تعداد و فاصله گمانه ها</p>
      <p className="mb-8 mt-4 md:leading-loose text-justify">
        اقدامات زیر برای تعیین فاصله گمانه ها یا چاه های شناسایی ضروریی است. در
        توضیحات زیر باید توجه داشت هر جا از واژه گمانه استفاده شده است، منظور
        گمانه ماشینی یا چاه دستی شناسایی می باشد چنانچه گمانه زنی به منظور ساخت
        یک ساختمان منفرد انجام می شود: الف- فاصله گمانه ها باید 15 الی 35 متر
        متناسب با تعداد طبقات، اهمیت ساختمان و پیچیدگی لایه بندی زمین و با توجه
        به جدول 1-2-7 تعیین شود. ب- در جدول 7-2-1 ، اهمیت ساختمان ها بر مبنای
        استاندارد ۲۸۰۰ تعیین شده است. پ- در صورتیکه ساختمان مورد نظر پس از ایجاد
        گودبرداری احداث شود، گمانه های لازم برای گودبرداری نیز باید به تعداد
        گمانه های تعیین شده برای ساختمان اضافه شود.
      </p>
      <div className="flex justify-center absolute right-0 left-0 -bottom-4">
        <p className="bg-ciForeground border flex justify-center font-bold items-center shadow-2xl w-8 h-8 rounded-full p-4">
          18
        </p>
      </div>
    </div>
  );
}

export default ItemTopic;
