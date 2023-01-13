import React from 'react'
import CountryShow from './CountryShow'

const CountryList = ({ countryList }) => {
  const renderedCountries = countryList.map((country, index) => (
    <CountryShow key={index} country={country} />
  ))

  const infoMsg = <h3>Try again! Unfortunately there's no such country</h3>

  return (
    <div className='px-10 mt-16 flex flex-col items-center gap-20 md:grid md:place-items-center md:grid-cols-2 lg:grid-cols-3'>
      {renderedCountries.length > 0 ? renderedCountries : infoMsg}
    </div>
  )
}

export default CountryList
