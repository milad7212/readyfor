import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import TopBar from "../components/layout/TopBar";
import Layout from "../components/layout/Layout";
import { CategoryData } from "../data/data";

export default function Home() {
  return (
    <Layout>
    <div className=" min-h-screen bg-ciBackground p-4 ">
      <div className=" flex flex-col items-center justify-center text-ciForeground">
        <img
          className="h-20 w-20    md:h-40 md:w-40 rounded-full bg-ciBackgroundTwo"
          src="/images/foundation/main2.webp"
          alt=""
        />

        <p className=" md:my-5 my-2 md:text-3xl font-bold text-ciPink">مهندسی </p>
        <p className=" animate-pulse md:text-xl font-bold">راحتتر مهندسی کن</p>
      </div>
      <section className="my-8 mx-auto grid max-w-5xl grid-cols-2  md:grid-cols-6 gap-8 ">
        {CategoryData.map((item, index) => (
          <>
            <Link href={item.link}>
              <div className="flex  cursor-pointer flex-col items-center justify-center ">
                <div className="h-28 w-28    overflow-hidden ">
                  <img src={item.img} alt="" />
                </div>
                <p className="mt-1 md:text-2xl font-bold text-ciTiter">
                  {item.name}
                </p>
              </div>
            </Link>
          </>
        ))}
      </section>
    </div>
    </Layout>
  );
}
