import React from 'react'

import Typed from 'react-typed';


const Inspiring = () => {
  return (
    <div className='inspiring p-5 text-center'>


<Typed
className='text-white h1'
                strings={[
                    'Inspiring to dream',
                    'Creating the devised',
                    'Learn with us']}
                    typeSpeed={40}
                    backSpeed={50}
                    
                    loop >
                   
                </Typed>

        
        <p>Discover the newest articles and case studies from Pecode team</p>
        <img src="/images/positions/bottom-left-circle.svg" alt="" className='bottom-left-circle' />
        <img src="/images/positions/bottom-left.svg" alt="" className='bottom-left animate__animated  animate__rotateIn animate__infinite' />
        <img src="/images/positions/bottom-right.svg" alt="" className='bottom-right' />
        <img src="/images/positions/top-left.svg" alt="" className='top-left' />
        <img src="/images/positions/top-right-circle.svg" alt=""  className='top-right-circle'/>
        <img src="/images/positions/top-right.svg" alt="" className='top-right' />
    </div>
  )
}

export default Inspiring