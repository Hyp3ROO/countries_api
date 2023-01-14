import React from 'react'
import RegionFilter from './RegionFilter'
import SearchBar from './SearchBar'
import CountryList from './CountryList'
import Loading from 'react-simple-loading'

const Main = ({
  filteredCountries,
  search,
  setSearch,
  selectedRegion,
  setSelectedRegion,
  loading,
  theme,
}) => {
  return (
    <>
      <div className='md:px-16 md:flex md:justify-between md:items-center'>
        <SearchBar search={search} setSearch={setSearch} />
        <RegionFilter
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </div>
      {loading ? (
        <div className='mt-20'>
          <Loading
            color={theme === 'dark' ? 'white' : 'black'}
            size={'100px'}
            stroke={'10px'}
          />
        </div>
      ) : (
        <CountryList countryList={filteredCountries} />
      )}
    </>
  )
}

export default Main
