import React, { useState, useEffect } from 'react'
import { getOneCountry } from '../api'
import { Link, useParams } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Loading from 'react-simple-loading'

const CountryInfo = ({ theme }) => {
  const { name } = useParams()
  const [countryDetails, setCountryDetails] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchOneCountry = async country => {
    setLoading(true)
    const countryInfo = await getOneCountry(country)
    setCountryDetails(...countryInfo)
    setLoading(false)
  }

  useEffect(() => {
    if (name) {
      fetchOneCountry(name)
    }
  }, [name])

  return (
    <div className='min-h-screen pb-10'>
      <Link
        to='/'
        className='inline-flex gap-2 items-center justify-between m-5 px-7 py-2 rounded-md bg-primary text-lightText hover:bg-gray-300 duration-300 dark:bg-darkPrimary dark:text-primary dark:hover:bg-slate-600'>
        <AiOutlineArrowLeft className='w-5 h-5' />
        Back
      </Link>
      {loading ? (
        <div className='mt-20'>
          <Loading
            color={theme === 'dark' ? 'white' : 'black'}
            size={'100px'}
            stroke={'10px'}
          />
        </div>
      ) : (
        <div className='w-full grid place-items-center mt-6 px-8 text-lightText dark:text-primary md:flex md:justify-evenly md:mt-16'>
          <LazyLoadImage
            className='w-[100%] md:w-[60%] md:max-w-[40rem]'
            src={countryDetails?.flags.svg}
            alt={countryDetails?.name.common}
          />
          <div className='w-full md:ml-8 md:w-auto'>
            <h1 className='mt-8 text-2xl font-bold'>
              {countryDetails?.name.common}
            </h1>
            <div className='flex flex-col items-start justify-start md:flex-row md:gap-3 lg:gap-40'>
              <ul className='my-5'>
                <li className='my-2'>
                  <span className='font-bold'>Native Name: </span>
                  {Object.values(countryDetails?.name.nativeName)[0].common}
                </li>
                <li className='my-2'>
                  <span className='font-bold'>Population: </span>
                  {countryDetails?.population.toLocaleString('en-US')}
                </li>
                <li className='my-2'>
                  <span className='font-bold'>Region: </span>
                  {countryDetails?.region}
                </li>
                <li className='my-2'>
                  <span className='font-bold'>Sub Region: </span>
                  {countryDetails?.subregion}
                </li>
                <li className='my-2'>
                  <span className='font-bold'>Capital: </span>
                  {countryDetails?.capital.join(', ')}
                </li>
              </ul>
              <ul className='my-5'>
                <li className='my-2'>
                  <span className='font-bold'>Top Level Domain: </span>
                  {countryDetails?.tld.join(', ')}
                </li>
                <li className='my-2'>
                  <span className='font-bold'>Currencies: </span>
                  {Object.keys(countryDetails.currencies).join(', ')}
                </li>
                <li className='my-2'>
                  <span className='font-bold'>Languages: </span>
                  {Object.values(countryDetails.languages).join(', ')}
                </li>
              </ul>
            </div>
            <h2 className='text-lg'>Border Countries:</h2>
            <ul className='grid grid-cols-2 gap-2 lg:grid-cols-4'>
              {countryDetails?.borders?.map(border => (
                <Link to={`/details/${border}`} key={border}>
                  <li
                    className='mt-4 px-6 py-2 text-center rounded-md bg-primary dark:bg-darkPrimary hover:bg-gray-300 dark:hover:bg-slate-600 duration-300'>
                    {border}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default CountryInfo
