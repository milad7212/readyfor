import React, { useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";

const options = [
  {
    label: "1.تعاریف",
    value: 1,
  },
  {
    label: "2.نظامات اداری",
    value: 2,
  },
  {
    label: "3.حفاظت ساختمان ها در مقابل حریق",
    value: 3,
  },
  {
    label: "4.الزامات عمومی ساختمان",
    value: 4,
  },
  {
    label: "5.مصالح و فرآورده های ساختمانی",
    value: 5,
  },
  {
    label: "6.بارهای وارد بر ساختمان",
    value: 6,
  },
  {
    label: "7.ژئوتکنیک و مهندسی پی",
    value: 7,
  },
  {
    label: "8.طرح و اجرای ساختمان های با مصالح بنایی",
    value: 8,
  },
  {
    label: "9.طرح و اجرای ساختمانهای بتن آرمه",
    value: 9,
  },
  {
    label: "10.طرح و اجرای ساختمانهای فولادی",
    value: 10,
  },
  {
    label: "11.طرح و اجرای صنعتی ساختمان ها",
    value: 11,
  },
  {
    label: "12.ایمنی و حفاظت کار در حین اجر",
    value: 12,
  },
  {
    label: "13.طرح و اجرای تاسیسات برقی ساختمان ها",
    value: 13,
  },
  {
    label: "14.تاسیسات مکانیکی",
    value: 14,
  },
  {
    label: "15.آسانسورها و پلکان برقی",
    value: 15,
  },
  {
    label: "16.تاسیسات بهداشتی",
    value: 16,
  },
  {
    label: "17.لوله کشی گاز طبیعی",
    value: 17,
  },
  {
    label: "18.عایق بندی و تنطیم صدا",
    value: 18,
  },
  {
    label: "19.صرفه جویی در مصرف انرژی",
    value: 19,
  },
  {
    label: "20.علائم و تابلوها",
    value: 20,
  },
  {
    label: "21.پدافند غیرعامل",
    value: 21,
  },
  {
    label: "22.مراقبت و نگهداری از ساختمان ها",
    value: 22,
  },
];
const optionTest = [
  {
    label: "اجرا",
    value: "اجرا",
  },
  {
    label: "نظارت",
    value: "نظارت",
  },
  {
    label: "محاسبات",
    value: "محاسبات",
  },
];
const optionTestYear = [
  {
    label: 1390,
    value: 1390,
  },
  {
    label: 1391,
    value: 1391,
  },
  {
    label: 1392,
    value: 1392,
  },
  {
    label: 1393,
    value: 1393,
  },
  {
    label: 1394,
    value: 1394,
  },
  {
    label: 1395,
    value: 1395,
  },
  {
    label: 1396,
    value: 1396,
  },
  {
    label: 1397,
    value: 1397,
  },
  {
    label: 1398,
    value: 1398,
  },
  {
    label: 1399,
    value: 1399,
  },
  {
    label: 1400,
    value: 1400,
  },
  {
    label: 1401,
    value: 1401,
  },
];
const optionTestMonth = [
  {
    label: "فروردین",
    value: 1,
  },
  {
    label: "اردیبهشت",
    value: 2,
  },
  {
    label: "خرداد",
    value: 3,
  },
  {
    label: "تیر",
    value: 4,
  },
  {
    label: "مرداد",
    value: 5,
  },
  {
    label: "شهریور",
    value: 6,
  },
  {
    label: "مهر",
    value: 7,
  },
  {
    label: "آبان",
    value: 8,
  },
  {
    label: "آذر",
    value: 9,
  },
  {
    label: "دی",
    value: 10,
  },
  {
    label: "بهمن",
    value: 11,
  },
  {
    label: "اسفند",
    value: 12,
  },
];

function AddTestPage() {
  const [witchQuestion, setWitchQuestion] = useState(5);
  return (
    <div className="min-h-screen bg-ciBackground ">
      <Header />
      <div className="flex ">
        <Form witchQuestion={witchQuestion} />
        <NumbersPart
          setWitchQuestion={setWitchQuestion}
          witchQuestion={witchQuestion}
        />
      </div>
    </div>
  );
}

export default AddTestPage;

// Components
function TextArea({ label }) {
  return (
    <div className="relative ">
      <textarea
        placeholder={label}
        rows="2"
        type="text "
        className="my-2 block  w-full rounded-md py-3 px-4 outline-none "
      />
      <div className="absolute left-1 bottom-1">
        <input type="radio" name="correctTest" value="1" id="" />
      </div>
    </div>
  );
}

function Header() {
  return (
    <>
      <div className="mb-4 flex items-center  justify-center  bg-gray-300  py-2">
        <div className="flex items-center">
          <span className="ml-2 text-sm">آزمون</span>

          <Select options={optionTest} placeholder="انتخاب آزمون..." />
        </div>
        <div className="flex items-center">
          <span className="ml-2 mr-4 text-sm">سال</span>

          <Select options={optionTestYear} placeholder="انتخاب سال ..." />
        </div>
        <div className="flex items-center">
          <span className="ml-2 mr-4 text-sm">ماه</span>

          <Select options={optionTestMonth} placeholder="انتخاب ماه..." />
        </div>
      </div>
    </>
  );
}

function NumbersPart({ witchQuestion, setWitchQuestion }) {
  function choiceStyle(value) {
    if (value == witchQuestion) {
      return "bg-ciYellow  shadow-lg animate-bounce ";
    } else {
      return "bg-gray-300";
    }
  }

  return (
    <>
      <div
        style={{ direction: "ltr" }}
        className=" flex max-h-[550px]  w-28 flex-col flex-wrap items-center justify-center gap-1  px-2 pb-4"
      >
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
          38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
          55, 56, 57, 58, 59, 60,
        ].map((item, index) => (
          <span
            onClick={() => setWitchQuestion(index + 1)}
            key={index}
            className={`${choiceStyle(
              index + 1
            )} relative flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg text-xs font-bold duration-100 active:scale-90`}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </>
  );
}

function Form({ witchQuestion }) {
  const [correctOption, setCorrectOption] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="  mx-4 grow">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            {/* question */}
            <div className="">
              <textarea
                {...register("question", { required: true })}
                placeholder="صورت سوال"
                rows="3"
                type="text "
                className="mb-4 block w-full rounded-md py-3 px-4 outline-none "
              />
              <div className="relative ">
                <textarea
                  {...register("option1", { required: true })}
                  placeholder="گزینه اول"
                  rows="2"
                  type="text "
                  className="my-2 block  w-full rounded-md py-3 px-4 outline-none "
                />
                <div className="absolute left-1 bottom-1">
                  <input
                    type="checkbox"
                    name="correctTest"
                    onClick={()=>setCorrectOption(1)}
                    checked={correctOption == 1}
                    id=""
                  />
                </div>
              </div>
              <div className="relative ">
                <textarea
                  {...register("option2", { required: true })}
                  placeholder="گزینه دوم"
                  rows="2"
                  type="text "
                  className="my-2 block  w-full rounded-md py-3 px-4 outline-none "
                />
                <div className="absolute left-1 bottom-1">
                  <input
                    type="checkbox"
                    name="correctTest"
                    onClick={()=>setCorrectOption(2)}
                    checked={correctOption == 2}
                  />
                </div>
              </div>
              <div className="relative ">
                <textarea
                  {...register("option3", { required: true })}
                  placeholder="گزینه سوم"
                  rows="2"
                  type="text "
                  className="my-2 block  w-full rounded-md py-3 px-4 outline-none "
                />
                <div className="absolute left-1 bottom-1">
                  <input
                    type="checkbox"
                    name="correctTest"
                    onClick={()=>setCorrectOption(3)}
                    checked={correctOption == 3}
                  />
                </div>
              </div>
              <div className="relative ">
                <textarea
                  {...register("option4", { required: true })}
                  placeholder="گزینه چهارم"
                  rows="2"
                  type="text "
                  className="my-2 block  w-full rounded-md py-3 px-4 outline-none "
                />
                <div className="absolute left-1 bottom-1">
                  <input
                    type="checkbox"
                    name="correctTest"
                    onClick={()=>setCorrectOption(4)}
                    checked={correctOption == 4}
                  />
                </div>
              </div>
            </div>
            {/* Ans */}
            <div className="flex flex-col gap-4">
              <div className="">
                <p className="mb-2 font-black text-ciTiter">کدام مبحث</p>
                <Select options={options} placeholder="انتخاب مبحث..." />
              </div>
              <div className="flex justify-between">
                <div className="">
                  <p className="mb-2 font-black text-ciTiter">کدام صفحه</p>
                  <input
                    type="text"
                    className=" block w-20 rounded-md py-3 px-4 outline-none"
                  />
                </div>
                <div className="">
                  <p className="mb-2 font-black text-ciTiter">کدام بند</p>
                  <div style={{ direction: "ltr" }} className="flex">
                    <input
                      type="text"
                      className="mx-1 block w-10 rounded-md py-3 px-4 outline-none"
                    />
                    <input
                      type="text"
                      className="mx-1 block w-10 rounded-md py-3 px-4 outline-none"
                    />
                    <input
                      type="text"
                      className="mx-1 block w-10 rounded-md py-3 px-4 outline-none"
                    />
                    <input
                      type="text"
                      className="mx-1 block w-10 rounded-md py-3 px-4 outline-none"
                    />
                    <input
                      type="text"
                      className="mx-1 block w-10 rounded-md py-3 px-4 outline-none"
                    />
                    <input
                      type="text"
                      className="mx-1 block w-10 rounded-md py-3 px-4 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="">
                <p className="mb-2 font-black text-ciTiter">توضیحات بیشتر</p>
                <textarea
                  placeholder=" توضیحات بیشتر"
                  rows="3"
                  type="text "
                  className="mb-4 block w-full rounded-md py-3 px-4 outline-none "
                />
              </div>
              <div className="h-[80px]">
                <div className="flex h-full w-[240px] cursor-pointer items-center justify-center rounded-md bg-white duration-300  hover:bg-gray-300 active:scale-95">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="onSubmit"
              className="mx-auto w-[90%] rounded-lg bg-ciOrange py-4 font-bold duration-200 ease-in hover:scale-105 hover:bg-ciGreen active:scale-95"
            >
              <span className="">ثبت سوال</span>
              <span className="mx-2"> {`( ${witchQuestion} )`}</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
