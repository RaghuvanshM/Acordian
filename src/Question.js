import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
  const [showinfo ,setshowInfo] = useState(false);
  const btncliked =()=>{
    setshowInfo(!showinfo)
  }
  return (
  <article className ='question'>
    <header>
      <h4>{title}</h4>
      <button className='btn'
      onClick={btncliked}
      >
    {showinfo?<AiOutlineMinus />:<AiOutlinePlus/>}
      </button>
    </header>
    {showinfo?<p>{info}</p>:null}
  </article>
  )
};

export default Question;
