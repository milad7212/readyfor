import React from 'react'
import {HiHome} from 'react-icons/hi'

const isNotActiveStyle='flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize'
const isActiveStyle='flex items-center px-5 gap-3 font-extrabold border-l-2 border-black  transition-all duration-200 ease-in-out capitalize'


const categories=[
    {name:'Animals'},
    {name:'wallpapers'},
    {name:'Photography'},
    {name:'Gaming'},
    {name:'Coding'},
]

function Sidebar({closeToggle}) {
  return (
    <div className="flex flex-col justify-between bg-white h-full  ">
        <div className="flex flex-col">
            <div className="flex px-5 gap-2 my-6 pt-1 w-[190px] items-center"></div>
            <div className="flex flex-col gap-5">
                <div className={isActiveStyle}>
                    <HiHome fontSize={24}/>
                    <span>

                    Home
                    </span>
                </div>
                <h3 className="mt-2 px-5 text-base 2xl:text-xl">
                    Discover categories
                </h3>
                {categories.map((category)=>(
                    <div key={category.name} className="px-5">{category.name}</div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Sidebar