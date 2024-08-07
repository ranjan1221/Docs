import React, { useRef, useState } from 'react'
import Card from './Card'

const Foreground = () => {
const ref = useRef(null)
// const [card, setcard] = useState([]);
// const onbtnclick = event=>{
//     setcard(card.concat(<Card/>));
// }
// const Input = () => {
//     return <input placeholder="Your input here" />;
//   };
// const [inputList, setInputList] = useState([]);

//   const onAddBtnClick = event => {
//     setInputList(inputList.concat(<Input key={inputList.length} />));
//   };


    const data = [{
        desc:"lorem kjkcjjw bwjdjwdj hjwdjwhdhdjwd p1iwpw",
        fileSize:"0.9mb",
        close:true,
        tag:{isopen:true,tagtitle:"downloadNow",tagColor:'green'}
    },{
        desc:"lorem kjkcjjw bwjdjwdj hjwdjwhdhdjwd p1iwpw",
        fileSize:"0.9mb",
        close:false,
        tag:{isopen:true,tagtitle:"downloadNow",tagColor:'green'}
    },{
        desc:"lorem kjkcjjw bwjdjwdj hjwdjwhdhdjwd p1iwpw",
        fileSize:"0.9mb",
        close:true,
        tag:{isopen:true,tagtitle:"downloadNow",tagColor:'green'}
    },{
        desc:"lorem kjkcjjw bwjdjwdj hjwdjwhdhdjwd p1iwpw",
        fileSize:"0.9mb",
        close:false,
        tag:{isopen:false,tagtitle:"downloadNow",tagColor:'green'}
    }]
  return (
<>
<div ref={ref} className='w-full h-full  fixed z-[3] top-0 left-0 flex gap-9 flex-wrap p-5'>
{/* <button onClick={onAddBtnClick}>Add input</button>
      {inputList} */}
{
    data.map((item,index)=>(
        <Card data={item} reference={ref} key={index}/>

    ))
}


</div>

</>
  )
}

export default Foreground