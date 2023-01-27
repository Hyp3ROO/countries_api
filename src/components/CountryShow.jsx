import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const CountryShow = ({ country }) => {
  return (
    <Link to={`/details/${country?.cca3}`}>
      <div className='bg-primary text-lightText rounded-md overflow-hidden dark:bg-darkPrimary dark:text-primary'>
        <LazyLoadImage
          className='w-[300px] h-[150px] object-cover'
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
