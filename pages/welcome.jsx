import React from "react";

function welcome() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            سلام مهندس :)
            {/* <span className="sm:block"> میلاد حسنی هستم</span> */}
          </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
            میلاد حسنی هستم .فارغ التحصیل ارشد ژئوتکنیک دانشگاه باهنر کرمان{" "}
            {"  "}.<span className="text-sm">سال 97</span>
            <span className="mt-3 block">
              در صورت داشتن انتقاد، پیشنهاد و نظرات خود میتونید بهم پیام بدید
            </span>
            <span className="">09139939426</span>
            <span className="mt-4 block text-sm">
              در صورت حمایت مالی برای ارتقا سایت هم میتونید من رو به ی قهوه دعوت
              کنید
            </span>
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="https://zarinp.al/nigthbird.ir"
            >
              دعوت من ی قهوه
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default welcome;
