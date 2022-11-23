import React, { useState } from "react";
import SideBar from "../../components/shareMe/SideBar";

function ShareMePage() {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  return (
    <div className="flex h-screen  flex-col bg-gray-50 transition duration-75  ease-out md:flex-row">
      <div className="hidden h-screen flex-initial md:flex">
        <SideBar />
      </div>
      <div className="flex flex-row md:hidden">
        <div className="h-10 w-10 bg-gray-900"></div>
        <div className="h-10 w-10 bg-ciRed"></div>
      </div>
      {toggleSidebar && (
        <div className="animate-slide-in fixed z-10 h-screen w-4/5 overflow-y-auto bg-white shadow-md">
          <div className="p-2 absolute w-full flex justify-end items-center">
            <div className="h-5 w-5 bg-ciOrange" onClick={()=>setToggleSidebar(false)}></div>
            <SideBar/>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShareMePage;
