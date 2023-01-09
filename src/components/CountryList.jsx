import React from 'react'
import CountryShow from './CountryShow'

const CountryList = ({ countryList }) => {
  const renderedCountries = countryList.map((country, index) => (
    <CountryShow key={index} country={country} />
  ))

  return (
    <div className='mt-6 flex flex-col items-center md:grid md:place-items-center md:grid-cols-2 lg:grid-cols-3'>
      {renderedCountries}
    </div>
  )
}

export default CountryList
