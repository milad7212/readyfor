import Image from 'next/image'
import React from 'react'

function index() {
  return (
    <div className="bg-ciBackBeauty p-2">
        <div className="flex justify-end flex-col items-end">
            <Image src='/images/jadi.png' width={500} height={500} className='rounded-xl' />
        <button className='py-4 px-2 bg-ciGreen rounded-lg font-black'> من به یادتم هنوز...</button>
        </div>

        <p className="">درسی که از جادی یادم گرفتم :</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  )
}

export default index