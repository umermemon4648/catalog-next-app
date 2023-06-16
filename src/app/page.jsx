// import Image from 'next/image'
"use client" 
import React, { useState, useEffect } from 'react'
import {Thumbs, Viewer} from '../components'
import { image1, image2, image3, image4 } from '../assets/images'
import 'h8k-components'

// const title:string = 'Catalog Viewer'
const title = 'Catalog Viewer'

export default function Home() {
  const catalogsList = [
    {
      thumb: image1,
      image: image1
    },
    {
      thumb: image2,
      image: image2
    },
    {
      thumb: image3,
      image: image3
    },
    {
      thumb: image4,
      image: image4
    }
  ]

  const [ catalogs, setCatalogs ] = useState([...catalogsList])
  const [ activeIndex, setActiveIndex ] = useState(0)
  const [ isSliding, setIsSliding ] = useState(false)
  const [ slideTimer, setSlideTimer ] = useState(null)
  const [ slideDuration ] = useState(1000)
  const [ isCheck, setIsCheck ] = useState(false)


  const thumbClickHandler = (idx)=>{
    setActiveIndex(idx)
  }

  const handleChange = (e)=>{
    setIsCheck(e.target.checked)
  }

  const forwardBtnHandler = ()=>{
    const nextIndex = (activeIndex+1)%catalogs.length
    setActiveIndex(nextIndex)
  }

  const backwardBtnHandler = ()=>{
    const prevIndex = (activeIndex-1+catalogs.length)%catalogs.length
    setActiveIndex(prevIndex)
  }


  useEffect(()=>{

    let interval= null
    if(isCheck){
      interval = setInterval(()=>{
        const nextIndex = (activeIndex+1)%catalogs.length
    setActiveIndex(nextIndex)
      }, slideDuration)
    }

    return()=>{
      if(interval){
        clearInterval(interval)
      }
    }


  },[activeIndex ,isCheck])



  // useEffect(()=>{
  //   let interval = null
  //   if (isCheck) {
  //     interval = setInterval(() => {
  //       setActiveIndex((prevIndex)=> (prevIndex+1)% catalogs.length)
  //     }, slideDuration);
  //   }
  //   return()=>{
  //     clearInterval(interval)
  //   }

  // },[isCheck])


  return (
   <>

<h8k-navbar header={ title }>
      <div className='layout-column justify-content-center mt-75'>
        <div className='layout-row justify-content-center'>
          <div className='card pt-25'>
            <Viewer catalogImage={ catalogs[activeIndex].image.src } />
            <div className='layout-row justify-content-center align-items-center mt-20'>
            <button 
              className="icon-only outlined"
              data-testid="prev-slide-btn"
              onClick={backwardBtnHandler}
            >
              <i className="material-icons">arrow_back</i>
            </button>
              <Thumbs 
                items={ catalogs } 
                currentIndex={ activeIndex } 
                handleClick={thumbClickHandler}
              />
            <button 
              className="icon-only outlined"
              data-testid="next-slide-btn"
              onClick={forwardBtnHandler}
            >
              <i className="material-icons">arrow_forward</i>
            </button>
            </div>
          </div>
        </div>
        <div className='layout-row justify-content-center mt-25'>
          <input 
            type='checkbox'
            data-testid='toggle-slide-show-button'
            checked={isCheck}
            onChange={handleChange}
          /> 
          <label className='ml-6'>Start Slide Show</label>
        </div>
      </div>
      </h8k-navbar>
   </>
  )
}
