import { useRouter } from "next/router";
import React, { useState } from "react";
import LeftIcon from "../../../components/icons/LeftIcon";
import ReadQuestions from "../../../components/test/ReadQuestions";
import { booksData } from "../../../data/data";

function BookPage() {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={`   flex  min-h-screen  bg-ciBackground  `}>
      <div
        className={` ${
          open ? "relative min-h-screen w-72" : "absolute  h-20 w-20"
        }  bg-ciPurple  p-4 duration-300`}
      >
        <div
          onClick={() => setOpen(!open)}
          className={`absolute -left-4 top-9 h-8 w-8 cursor-pointer 
           rounded-full border-2 border-ciPurple  bg-ciBackground duration-300 ${
             open && "rotate-180"
           }  
           flex items-center justify-center`}
        >
          <LeftIcon className="text-ciTiter" />
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
