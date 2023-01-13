import React from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className='flex justify-center items-center mt-5'>
      <div className='flex items-center w-[90%] px-6 bg-primary rounded-md dark:bg-darkPrimary'>
        <FiSearch className='md:h-5 md:w-5 stroke-lightText dark:stroke-primary' />
        <input
          className='mx-3 py-3 w-full outline-none font-bold text-lightText text-sm md:text-lg bg-transparent dark:text-primary'
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder='Search for a country...'
        />
      </div>
    </div>
  )
}

export default SearchBar
