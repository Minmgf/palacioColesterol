import React from 'react'
import headerImage from '../assets/imgs/header.webp'

const Banner = () => {
  return (
    <div className='bg-no-repeat bg-cover ' style={{ backgroundImage: `url(${headerImage})` }}>

    <img src={headerImage} className='opacity-0 hover:opacity'  />
    </div>
  )
}

export default Banner
