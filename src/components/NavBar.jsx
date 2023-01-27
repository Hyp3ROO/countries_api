import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

const NavBar = ({ theme, changeTheme }) => {
  return (
    <nav className='flex justify-between items-center w-full px-3 h-20 text-lightText bg-primary md:px-8 dark:bg-darkPrimary dark:text-primary'>
      <h1 className='text-md font-bold lg:text-xl'>Where in the world?</h1>
      <p className='flex items-center text-sm' onClick={changeTheme}>
        {theme === 'light' ? (
          <BsMoon className='mr-1 h-5 w-5 md:h-6 md:w-6 hover:scale-110 duration-300 cursor-pointer' />
        ) : (
          <BsSun className='mr-1 h-5 w-5 md:h-6 md:w-6 hover:scale-110 duration-300 cursor-pointer' />
        )}
      </p>
    </nav>
  )
}

export default NavBar
