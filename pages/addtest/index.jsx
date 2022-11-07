import React from "react";

function AddTestPage() {
  return (
    <div className=" min-h-screen bg-ciBackground p-4 relative  ">
      <div className="flex gap-1 p-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
          (item, index) => (
            <span
              onClick={() => changeCertainQuestion(index)}
              key={index}
              className={`bg-ciForeground relative w-6 h-6 rounded-lg flex justify-center items-center text-xs font-bold cursor-pointer active:scale-90 duration-100`}
            >
              {index + 1}
            </span>
          )
        )}
      </div>
      <form action="">
        <div className=" mx-4">
          <div className="grid grid-cols-2 gap-2">
            {/* question */}
            <div className="">
              <div className="">
                <p className="text-ciTiter font-black my-2">صورت سوال</p>
                <textarea
                  className="w-full rounded-md outline-none p-2"
                  name=""
                  id="question"
                  rows="4"
                />
              </div>

              <div className="">
                <p className="text-ciTiter font-black my-2">گزینه اول</p>
                <textarea
                  rows="2"
                  type="text "
                  className="py-3 px-4 rounded-md outline-none w-5/6 "
                />
              </div>
              <div className="">
                <p className="text-ciTiter font-black my-2">گزینه دوم</p>
                <textarea
                  rows="2"
                  type="text "
                  className="py-3 px-4 rounded-md outline-none w-5/6 "
                />
              </div>

              <div className="">
                <p className="text-ciTiter font-black my-2">گزینه سوم</p>
                <textarea
                  rows="2"
                  type="text "
                  className="py-3 px-4 rounded-md outline-none w-5/6 "
                />
              </div>
              <div className="">
                <p className="text-ciTiter font-black my-2">گزینه چهارم</p>
                <textarea
                  rows="2"
                  type="text "
                  className="py-3 px-4 rounded-md outline-none w-5/6 "
                />
              </div>
            </div>
            {/* Ans */}
            <div className="">
              <div className="">
                <p className="text-ciTiter font-black">جواب درست</p>
                <input type="radio" name="correctTest" value="1" id="" />
                <input type="radio" name="correctTest" value="2" id="" />
                <input type="radio" name="correctTest" value="3" id="" />
                <input type="radio" name="correctTest" value="4" id="" />
              </div>
              <div className="">
                <p className="text-ciTiter font-black">کدام مبحث</p>
              </div>
              <div className="">
                <p className="text-ciTiter font-black">کدام صفحه</p>
              </div>
              <div className="">
                <p className="text-ciTiter font-black">کدام بند</p>
              </div>
              <div className="">
                <p className="text-ciTiter font-black">توضیحات بیشتر</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTestPage;
