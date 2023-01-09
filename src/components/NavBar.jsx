import React from 'react'
import { BsFillMoonFill } from 'react-icons/bs'

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center w-full px-3 h-20 bg-primary md:px-8'>
      <h1 className='text-md font-bold'>Where in the world?</h1>
      <p className='flex items-center text-sm'>
        <BsFillMoonFill className='mr-1' /> Dark Mode
      </p>
    </nav>
  )
}

export default NavBar
