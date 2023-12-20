import React, { useEffect, useState } from 'react'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import './Slider.css'
const data=[
  "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA2fHxraWRzJTIwZmFpc2hpb24lMjBnYXJtZW50c3xlbnwwfHwwfHx8MA%3D%3D'
]
function Slider() {
  const [currentSlide,setCurrentSlide]=useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  // useEffect(()=>{
  //   setInterval(()=>{
  //     if(currentSlide==0&&currentSlide<3){
  //       setCurrentSlide((prev)=>prev+1)
       
  //     }else{
  //       setCurrentSlide(currentSlide)
  //     }
  //   },4000)
  // },[])
  return (
    <div className='slider'>
<div className='container' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
<img src={data[0]}/>      
<img src={data[1]}/>      
<img src={data[2]}/>     
</div> 
<div className='arrows'>
  <div className='arrow' onClick={prevSlide}>
    <AiOutlineArrowLeft/>
  </div>
  <div className='arrow' onClick={nextSlide}>
 <AiOutlineArrowRight/>
  </div>
</div>
    </div>
  )
}

export default Slider
