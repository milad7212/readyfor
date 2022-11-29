import React from "react";

function login() {
  return (
    <div
      className="grid grid-cols-1  gap-4 p-2 md:grid-cols-2 bg-gray-50
   "
    >
      <img
        src="/images/logoImage.webp"
        alt=""
        className="rounded-lg shadow-md shadow-ciBackBeauty"
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
          type="submit"
          className="my-4 w-full rounded-lg bg-ciBackBeauty  px-5
        py-2.5 text-center text-sm font-medium text-white
         hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto "
        >
          تایید
        </button>
      </div>
    </div>
  );
}

export default login;
