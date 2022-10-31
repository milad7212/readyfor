import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { CategoryData } from "../data/data";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className=" min-h-screen bg-ciBackground p-4 ">
      <div className="flex flex-col items-center justify-center mt-6 text-ciForeground">
        <span className="w-40 h-40 bg-ciBackgroundTwo rounded-full"></span>
        <p className="font-bold text-3xl my-5 text-ciPink">مهندسی عمران</p>
        <p className=" font-bold text-xl animate-pulse">راحتتر مهندسی کن</p>
      </div>
      <section className="grid grid-cols-3 gap-8 gap-y-16  my-20 max-w-5xl mx-auto">
        {CategoryData.map((item, index) => (
          <>
          
            <Link href='/main'>
              <div className="flex  justify-center items-center flex-col cursor-pointer ">

              <p className="w-36 h-36 bg-ciComment rounded-full "></p>
              <p className="text-ciTiter mt-4 font-bold text-2xl">
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
