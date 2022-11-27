import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import TopBar from "../components/layout/TopBar";
import Layout from "../components/layout/Layout";
import { CategoryData } from "../data/data";

export default function Home() {
  return (
    
      <div className=" min-h-screen bg-ciBackBeauty p-3 ">
        <div className=" flex  items-center  gap-5 text-ciForeground">
          <img
            className="h-20 w-20    rounded-3xl bg-ciBackgroundTwo md:h-32 md:w-32"
            src="/images/foundation/main2.webp"
            alt=""
          />

          <p className=" my-2 font-bold text-ciPink md:my-5 md:text-3xl">
            مهندسی{" "}
          </p>
          <p className=" animate-pulse font-bold md:text-xl">
            راحتتر مهندسی کن
          </p>
        </div>
        <section className="my-8 mx-auto flex max-w-5xl flex-wrap justify-center  gap-8 ">
          {CategoryData.map((item, index) => (
            <>
              <Link href={item.link}>
                <div className="  cursor-pointer  ">
                  <div className="h-28 w-28    overflow-hidden ">
                    <img src={item.img} alt="" />
                  </div>
                  <p className="mt-1 text-center font-bold text-ciTiter md:text-xl">
                    {item.name}
                  </p>
                </div>
              </Link>
            </>
          ))}
        </section>
      </div>
    
  );
}
