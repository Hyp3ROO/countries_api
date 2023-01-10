import React from 'react'
import { BsTypeH3 } from 'react-icons/bs'
import CountryShow from './CountryShow'

const CountryList = ({ countryList }) => {
  const renderedCountries = countryList.map((country, index) => (
    <CountryShow key={index} country={country} />
  ))

  const infoMsg = <h3>Try again! Unfortunately there's no such country</h3>

  return (
    <div className='mt-6 flex flex-col items-center md:grid md:place-items-center md:grid-cols-2 lg:grid-cols-3'>
      {renderedCountries.length > 0 ? renderedCountries : infoMsg}
    </div>
  )
}

export default CountryList
