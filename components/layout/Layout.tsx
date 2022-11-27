import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle, AiFillInstagram } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleSidebarDes, setToggleSidebarDes] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <div className="shadow-header  flex bg-ciTiter ">
        <div className="flex w-full flex-row items-center justify-between p-2  shadow-md">
          <div className="hidden md:block">
            <HiMenu
              fontSize={40}
              className="cursor-pointer text-gray-700 "
              onClick={() => setToggleSidebarDes((v) => !v)}
            />
          </div>
          <div className="block md:hidden">
            <HiMenu
              fontSize={40}
              className="cursor-pointer text-gray-800 "
              onClick={() => setToggleSidebarDes((v) => !v)}
            />
          </div>
          <AiFillInstagram
            fontSize={40}
            className="mr-4 cursor-pointer text-gray-700"
          />
          <CgProfile
            fontSize={40}
            className="mr-4 cursor-pointer text-gray-700"
          />
        </div>
        {/* sideBar in mobile */}
        {toggleSidebar && (
          <div className="animate-slide-in fixed z-10 h-screen w-4/5 overflow-y-auto bg-white shadow-md">
            <div className="absolute flex w-full items-center justify-end p-2">
              <AiFillCloseCircle
                fontSize={30}
                className="cursor-pointer"
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar closeToggle={setToggleSidebar} />
          </div>
        )}
      </div>
      <div className="flex h-screen flex-col bg-gray-50 md:flex-row  ">
        {/* sideBar in laptop */}
        {toggleSidebarDes && (
          <div className=" h-screen ">
            <Sidebar />
          </div>
        )}
        {toggleSidebar && (
          <div className="animate-slide-in fixed z-10 h-screen w-4/5 overflow-y-auto bg-white shadow-md">
            <div className="absolute flex w-full items-center justify-end p-2">
              <AiFillCloseCircle
                fontSize={30}
                className="cursor-pointer"
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar closeToggle={setToggleSidebar} />
          </div>
        )}

        <div className="h-screen flex-1 overflow-y-scroll pb-2" ref={scrollRef}>
          <div className="bg-gray-50">
            <div className="h-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
