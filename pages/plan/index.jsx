import React from "react";
import { motion } from "framer-motion";
function PlanPage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, stiffness: 100 }}
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6 py-8">
        <p className="text-center text-xl text-gray-500 dark:text-gray-300">
          انتخاب طرح
        </p>
        <h1 className="mt-4 text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
          قیمت طرح
        </h1>
        <div className="mt-6 space-y-8 xl:mt-12">
          <div className="mx-auto flex max-w-2xl cursor-pointer items-center justify-between rounded-xl border px-8 py-4 dark:border-gray-700">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 sm:h-9 sm:w-9"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="mx-5 flex flex-col items-center space-y-1">
                <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200 sm:text-2xl">
                  معمولی
                </h2>
                <div className="rounded-full bg-gray-100 px-2 text-xs text-blue-500 dark:bg-gray-700 sm:px-4 sm:py-1 ">
                  {/* Save 20% */}
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-300 sm:text-4xl">
              0 <span className="text-base font-medium">/تا ابد</span>
            </h2>
          </div>
          <div className="mx-auto flex max-w-2xl cursor-pointer items-center justify-between rounded-xl border border-blue-500 px-8 py-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600 sm:h-9 sm:w-9"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="mx-5 flex flex-col items-center space-y-1">
                <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200 sm:text-2xl">
                  سوپر دسترسی
                </h2>
                <div className="rounded-full bg-gray-100 px-2 text-xs text-blue-500 dark:bg-gray-700 sm:px-4 sm:py-1 ">
                  تخفیف 40%
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-blue-600 sm:text-4xl">
              299 <span className="text-base font-medium">/سالیانه</span>
            </h2>
          </div>

          <div className="flex justify-center">
            <button className="transform rounded-md bg-ciBackBeauty px-8 py-2 capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              انتخاب طرح
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PlanPage;
