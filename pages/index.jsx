import Hero from "../components/Hero";
import Head from "next/head";
import SearchDateForBooking from "../components/SearchDateForBooking";
import BannerOne from "../components/BannerOne";
import BannerWithOff from "../components/BannerWithOff";
import CardsThree from "../components/CardsThree";
export default function Home() {
  return (
    <>
    <Head>
      <title>آماده مراسم</title>
    </Head>
    <div className="bg-gray-100 min-h-screen">
      
      <Hero />
      <SearchDateForBooking/>
      <BannerOne/>
      <BannerWithOff/>
      <CardsThree/>
    </div>
    </>
  );
}
