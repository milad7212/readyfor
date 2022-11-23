import { useRouter } from "next/router";
import React, { useState } from "react";
import LeftIcon from "../../../components/icons/LeftIcon";
import ReadQuestions from "../../../components/test/ReadQuestions";
import { booksData } from "../../../data/data";

function BookPage() {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={` relative  flex  min-h-screen  bg-ciBackground  `}>
      {/* Sidebar */}
      <div
        className={` ${
          open ? "w-72 min-h-screen" : "w-20  h-20"
        } relative bg-ciPurple  p-4 duration-300`}
      >
        <div
          onClick={() => setOpen(!open)}
          className={`absolute -left-4 top-9 h-8 w-8 cursor-pointer 
           border-2 border-ciPurple bg-ciBackground  rounded-full duration-300 ${ open && 'rotate-180'}  
           flex justify-center items-center`}
           
        >
          <LeftIcon className='text-ciTiter' />
        </div>
        {open ? (
          <img
            className="mx-auto h-36 rounded-xl"
            src={`/images/book/${id}.jpg`}
            alt=""
          />
        ) : (
          <>
            <div className="shadoww flex h-12 w-12  items-center justify-center   rounded-lg">
              <p className=" text-2xl font-bold text-ciOrange ">{id}</p>
            </div>
          </>
        )}
        {open && (
          <div className="">
            <Item name={booksData[id]?.name} title="مبحث" />
            <Item name={booksData[id]?.count} title="تعداد سوالات " />
          </div>
        )}
      </div>

      {/* Main */}

      <div className="flex w-full justify-center p-4 ">
        <ReadQuestions />
      </div>
    </div>
  );
}

export default BookPage;

function Item({ title, name }) {
  return (
    <div className="mt-4 mb-4 flex">
      <p className="whitespace-nowrap text-ciComment"> {title} :</p>
      <p className="mr-3 whitespace-nowrap font-bold  text-ciTiter ">{name}</p>
    </div>
  );
}
