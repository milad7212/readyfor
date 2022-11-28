import { useRouter } from "next/router";
import React, { useState } from "react";

import ReadQuestions from "../../../components/test/ReadQuestions";
import { booksData } from "../../../data/data";

function BookPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={`   flex  min-h-screen  bg-ciBackground  `}>
      <div className="flex w-full justify-center p-4 ">
        <ReadQuestions />
      </div>
    </div>
  );
}

export default BookPage;
