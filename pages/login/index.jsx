import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";
import {motion} from 'framer-motion'
function Login() {
  const [witchStep, setWitchStep] = useState(1);
  return (
    <div className="min-h-screen  bg-gray-100">
      {witchStep == 1 && (
        <motion.div
        initial={{opacity:0 , scale:.8}}
        animate={{opacity:1,scale:1}}
        transition={{duration:.8,stiffness:100}}
          className="grid grid-cols-1   gap-4 p-2 pt-8 md:grid-cols-2 "
        >
          <img
            src="/images/logoImage.webp"
            alt=""
            className="rounded-lg shadow-md shadow-ciBackBeauty "
          />

          <div className="mt-3">
            <div>
              <label
                htmlFor="first_name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                موبایل
              </label>
              <input
                type="tel"
                id="first_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="09123456789"
                required
              />
            </div>
            <button
              onClick={() => setWitchStep(2)}
              type="submit"
              className="my-4 w-full rounded-lg bg-ciBackBeauty  px-5
          py-2.5 text-center text-sm font-medium text-white
           hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto "
            >
              تایید
            </button>
          </div>
        </motion.div>
      )}
      {witchStep == 2 && (
        <motion.div
        initial={{opacity:0 , scale:.8}}
        animate={{opacity:1,scale:1}}
        transition={{duration:.8,stiffness:100}}
          className="grid grid-cols-1  gap-4 p-2 pt-8 md:grid-cols-2 
         "
        >
          <img
            src="/images/backLogin.webp"
            alt=""
            className="mx-auto  rounded-lg shadow-ciComment"
          />

          <div className="mt-3">
            <div>
              <label
                htmlFor="first_name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                کد تایید{" "}
              </label>
              <input
                type="tel"
                id="first_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder=""
                required
              />
            </div>
            <button
              onClick={() => setWitchStep(3)}
              type="submit"
              className="my-4 w-full rounded-lg bg-ciBackBeauty  px-5
          py-2.5 text-center text-sm font-medium text-white
           hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto "
            >
              تایید
            </button>
            <div className="flex justify-center">
              <p className="flex items-center">
                <span className="align-bottom text-sm ">کد به شماره</span>
                <span className="mx-2 align-bottom font-bold ">
                  09139939426
                </span>
                <span className="align-bottom text-sm ">ارسال گردید.</span>

                <TbEdit className="mr-2 mb-1 cursor-pointer " />
              </p>
            </div>
          </div>
        </motion.div>
      )}
      {witchStep == 3 && (
        <motion.div
        initial={{opacity:0 , scale:.8}}
        animate={{opacity:1,scale:1}}
        transition={{duration:.8,stiffness:100}}
          className="grid grid-cols-1  gap-4 p-2 pt-8 md:grid-cols-2 
         "
        >
          <img
            src="/images/background.webp"
            alt=""
            className="rounded-lg shadow-md shadow-ciComment"
          />

          <div className="mt-3">
            <div>
              <label
                htmlFor="first_name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                نام
              </label>
              <input
                type="tel"
                id="first_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder=""
                required
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="first_name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                نام خانوادگی
              </label>
              <input
                type="tel"
                id="first_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder=""
                required
              />
            </div>
            <button
              type="submit"
              className="my-4 w-full rounded-lg bg-ciBackBeauty  px-5
          py-2.5 text-center text-sm font-medium text-white
           hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto "
            >
              تایید
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Login;
