"use client"
import Link from "next/link"
import Image from "next/image"
import { TbGridDots } from 'react-icons/tb';

const  Header:React.FC = () => {
    const url:string = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
   

  return (
    
    <div className=" flex justify-end items-center space-x-4 pt-3 pr-4 text-sm ">
        
        <Link href='https://mail.google.com' className=" hover:underline text-sm">Gmail</Link>
        <Link href='https://image.google.com' className=" hover:underline  text-sm">Images</Link>
        <TbGridDots className="hidden md:inline-block text-4xl hover:bg-slate-300 rounded-full p-2 cursor-pointer" />

        <Image
        src={url}
        alt="menu"
        width={30}
        height={100}
        className=" rounded-full object-cover"
        style={{height:30}}
        
        />
      
    </div>
        
  )
}

export default Header
