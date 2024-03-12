import React, { useEffect, useRef, useState } from 'react'
import './productShowcase.css'

const ProductShowcase = () => {

  const [showAnimation,setShowAnimation]=useState(false)

const ref = useRef(null)


const toggleAnimation = (e) => {

  if(e[0].isIntersecting){
    setShowAnimation(true)

  }

 
}

const options={
  rot: null,
  rootMargin:"0px",
  threshhold:0.5,
}
useEffect(() => {

  const observer = new IntersectionObserver(toggleAnimation,options)
  
  if(!showAnimation){
    if(ref.current){
      observer.observe(ref.current)
    }
  }
  return () => {
    if(ref.current){
      observer.unobserve(ref.current)
    }
  }

  
})



  return (
    <div className={`product-showcase ${showAnimation ? "scale-up-bottom" : ""}`}
    ref={ref}
    >

     
  {showAnimation && ( <div className='showcase-wrapper'>
    <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-2.png' className='showcase-ui showcase-mockup-1'/>
    
    <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png' className='showcase-ui showcase-mockup-2'/>

    <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-center.png' className='showcase-ui showcase-mockup-3'/>

    <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-1.png' className='showcase-ui showcase-mockup-4'/>

    <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-2.png' className='showcase-ui showcase-mockup-5'/>

    
    
    </div>
  )}
      
    </div>
  )
}

export default ProductShowcase
