import React from 'react'

const CountryShow = ({ country }) => {
  return (
    <div className='my-4 w-[75%] bg-primary text-lightText rounded-md text-black overflow-hidden dark:bg-darkPrimary dark:text-primary'>
      <img className='w-full' src={country.flag} alt={country.name} />
      <div className='px-6 py-6'>
        <h2 className='pb-4 text-xl font-bold'>{country.name}</h2>
        <p className='py-1 text-sm'>
          <span className='font-bold mr-1'>Population:</span>
          {country.population}
        </p>
        <p className='py-1 text-sm'>
          <span className='font-bold mr-1'>Region:</span>
          {country.region}
        </p>
        <p className='py-1 text-sm'>
          <span className='font-bold mr-1'>Capital:</span>
          {country.capital}
        </p>
      </div>
    </div>
  )
}

export default CountryShow
