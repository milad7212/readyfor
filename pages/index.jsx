import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=" min-h-screen bg-ciBackground p-4 ">
      <div className="flex flex-col items-center justify-center mt-6 text-ciForeground">
        <span className="w-40 h-40 bg-ciBackgroundTwo rounded-full"></span>
        <p className="font-bold text-3xl my-5 text-ciPink">مهندسی عمران</p>
        <p className=" font-bold text-xl animate-pulse">راحتتر مهندسی کن</p>
      </div>
      <p className="text-white font-bold ">شروع 5</p>
    </div>
  )
}
