import React from 'react'
import RegionFilter from './RegionFilter'
import SearchBar from './SearchBar'
import CountryList from './CountryList'

const Main = ({
  filteredCountries,
  search,
  setSearch,
  selectedRegion,
  setSelectedRegion,
  loading,
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
        <p className='mt-10 text-center'>Loading...</p>
      ) : (
        <CountryList countryList={filteredCountries} />
      )}
    </>
  )
}

export default Main
