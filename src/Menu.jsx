import React from 'react'

function Menu() {
  return (
    <div >
        <ul className='flex w-[100%] justify-between items-center'>
            <li className='text-base mr-[3rem] hover:cursor-pointer'>Home</li>
            <li className='text-base mr-[3rem] hover:cursor-pointer'>ABout</li>
            <li className='text-base mr-[3rem] hover:cursor-pointer'>Features</li>
            <li className='text-base mr-[3rem]'>
            <button className= "bg-gradient-to-r from-green-500 to-teal-500 hover:from-purple-500 hover:to-pink-500 text-white font-poppins-semibold py-2 px-2 border border-transparent rounded-md shadow-sm" >
          Download App
        </button>
      </li>
        </ul>
    </div>
  )
}

export default Menu