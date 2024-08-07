import React from 'react'

const Background = () => {
  return (
   <>
    <div className='h-full w-full fixed z-[2]'>
    <div className='w-full py-10 font-semibold text-zinc-600 absolute top-[5%] flex justify-center text-xl'>Documents</div>
    <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[10vw] leading-none tracking-tight font-semibold text-zinc-900'>Docs</h1>
    </div>
   </>
  )
}

export default Background