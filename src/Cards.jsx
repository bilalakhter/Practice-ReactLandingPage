import React from 'react'
import './index.css'
function Cards() {
  return (
    <div className='cardsdisplay'>
        <h2 className='cardsheading'>The is the title for this section</h2>
        <h2 className='cardsheading2'>Some more text</h2>
    <div className='cardswrapper mt-0'>
        
    <div class="card-box w-[30%] ">
    <h1>Card Title</h1>
    <p>More text can go here as well asnd some more text lets add some more text</p>
     <div className='birdsimage '>
        <img className='birdie' src="/src/images/birds.jpg" alt="" />
     </div>
  </div>
  <div class="card-box w-[30%] ">
    <h1>Card Title</h1>
    <p>More text can go here as well asnd some more text lets add some more text</p>
     <div className='birdsimage '>
        <img className='birdie' src="/birds.jpg" alt="" />
     </div>
  </div>
  <div class="card-box w-[30%] ">
    <h1>Card Title</h1>
    <p>More text can go here as well asnd some more text lets add some more text</p>
     <div className='birdsimage '>
        <img className='birdie' src="/src/images/birds.jpg" alt="" />
     </div>
  </div>
  </div>
  </div>
  
  )
}

export default Cards