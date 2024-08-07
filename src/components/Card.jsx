import React from 'react'
import { TbFileSmile } from "react-icons/tb";
import { IoIosCloudDownload } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"
const Card = ({data,reference}) => {
  return (
   <>
   <motion.div drag dragConstraints={reference}  whileDrag={{scale:1.2}} dragElastic={0.1} dragTransition={{bounceStiffness:600,bounceDamping:10}} className=' relative w-60 h-72 bg-zinc-600 rounded-[50px] text-white px-8 py-10 overflow-hidden flex-shrink-0'>
   <TbFileSmile className='text-2xl' />
   <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
   <div className='footer absolute bottom-0 w-full left-0 '>
    <div className='flex items-center justify-between py-3  px-8 mb-3'>
        <h5>
            {data.fileSize}

        </h5>
        {data.close ? <IoIosCloudDownload size="1.2em"/>: <IoMdClose />}
    </div>

   {
    data.tag.isopen ? ( <div className='tag py-4 w-full bg-green-600 flex justify-center items-center'>
        <h3 className='text-sm font-semibold'>Download Now</h3>
    </div>):null
   }
   </div>
   </motion.div>
   </>
  )
}

export default Card