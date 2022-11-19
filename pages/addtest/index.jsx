import React from "react";

function AddTestPage() {
  return (
    <div className=" relative flex min-h-screen bg-ciBackground p-4 ">
      <div className=" mx-4 grow">
        <form action="">
          <div className="grid grid-cols-2 gap-4">
            {/* question */}
            <div className="">
              <textarea
                placeholder="صورت سوال"
                rows="3"
                type="text "
                className="mb-4 block w-full rounded-md py-3 px-4 outline-none "
              />

              <TextArea label="گزینه اول" />
              <TextArea label="گزینه دوم" />
              <TextArea label="گزینه سوم" />
              <TextArea label="گزینه چهارم" />
            </div>
            {/* Ans */}
            <div className="">
              <div className="">
                <p className="font-black text-ciTiter">کدام مبحث</p>
              </div>
              <div className="">
                <p className="font-black text-ciTiter">کدام صفحه</p>
              </div>
              <div className="">
                <p className="font-black text-ciTiter">کدام بند</p>
              </div>
              <div className="">
                <p className="font-black text-ciTiter">کدام آزمون</p>
              </div>
              <div className="">
                <p className="font-black text-ciTiter">کدام سال</p>
              </div>
              . <div className="">
                <p className="font-black text-ciTiter">کدام ماه</p>
              </div>
              <div className="">
                <p className="font-black text-ciTiter">توضیحات بیشتر</p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div
        style={{ direction: "ltr" }}
        className="flex max-h-screen flex-col flex-wrap gap-1 p-4 "
      >
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
          38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
          55, 56, 57, 58, 59, 60,
        ].map((item, index) => (
          <span
            onClick={() => changeCertainQuestion(index)}
            key={index}
            className={`relative flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg bg-ciForeground text-xs font-bold duration-100 active:scale-90`}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AddTestPage;

function TextArea({ label }) {
  return (
    <div className="relative ">
      <textarea
        placeholder={label}
        rows="2"
        type="text "
        className="my-2 block  rounded-md py-3 px-4 outline-none w-full "
      />
      <div className="absolute left-1 bottom-1">
        <input type="radio" name="correctTest" value="1" id="" />
      </div>
    </div>
  );
}
