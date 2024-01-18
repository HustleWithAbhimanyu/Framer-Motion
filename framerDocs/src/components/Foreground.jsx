import React, { useRef } from 'react'
import Card from './Card'
import { motion } from "framer-motion"

const Foreground = () => {
// const[] =useState();

const ref= useRef(null);

const data = [
  {desc:"Lorem5 ", filesize:".8mb", close :true, 
  tag: { isOpen:true, tagTitle: "Download Now",tagColor: "green" },},
  {desc:"Lorem5 ", filesize:".8mb", close :true, 
  tag: { isOpen:true, tagTitle: "jksadsvdjkvn",tagColor: "blue" },},
  {desc:"Abhimanyu ", filesize:".9mb", close :true, 
  tag: { isOpen:true, tagTitle: "Download Now",tagColor: "green" },},
];


  return (
    
      <div ref ={ ref} className='fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap justify-between p-5'>
        {data.map((item,index) => (
          <Card data={item} reference={ref}/>
        ))}
        
        </div>
    
  )
}

export default Foreground
