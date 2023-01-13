import React from 'react'
import { Link } from 'react-router-dom'

const CountryShow = ({ country }) => {
  return (
    <Link to={`/${country?.name.common.toLowerCase()}`}>
      <div className='bg-primary text-lightText rounded-md overflow-hidden dark:bg-darkPrimary dark:text-primary'>
        <img
          className='w-full'
          src={country?.flags.svg}
          alt={country?.name.common}
        />
        <div className='px-6 py-6'>
          <h2 className='pb-4 text-xl font-bold'>{country?.name.common}</h2>
          <p className='py-1 text-sm'>
            <span className='font-bold mr-1'>Population:</span>
            {country?.population.toLocaleString('en-US')}
          </p>
          <p className='py-1 text-sm'>
            <span className='font-bold mr-1'>Region:</span>
            {country?.region}
          </p>
          <p className='py-1 text-sm'>
            <span className='font-bold mr-1'>Capital:</span>
            {country?.capital}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default CountryShow
