import { useRouter } from "next/router";
import React, { useState } from "react";
import ReadQuestions from "../../../components/test/ReadQuestions";
import { booksData } from "../../../data/data";

function BookPage() {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className=" relative flex min-h-screen bg-ciBackground  ">
      {/* Sidebar */}
      <div
        onClick={() => setOpen(!open)}
        className={`h-screen ${
          open ? "w-72" : "w-20"
        } relative bg-ciPurple  p-4 duration-300`}
      >
        <div className="absolute -left-3 top-9 h-6 w-6 cursor-pointer border-2 border-ciPurple bg-ciPink"></div>
        {open ? (
          <img
            className="mx-auto h-36 rounded-xl"
            src={`/images/book/${id}.jpg`}
            alt=""
          />
        ) : (
          <>
            <div className="flex h-10 w-10 items-center  justify-center rounded-lg bg-ciBackground">
              <p className=" text-2xl font-bold text-ciOrange ">{id}</p>
            </div>
          </>
        )}
        <div className="">
          <Item name={booksData[id]?.name} title="مبحث" />
          <Item name={booksData[id]?.count} title="تعداد سوالات " />
        </div>
      </div>

      {/* Main */}

      <div className="flex flex-1 justify-center ">
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
