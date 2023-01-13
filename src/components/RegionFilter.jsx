import React from 'react'

const RegionFilter = ({ selectedRegion, setSelectedRegion }) => {
  return (
    <div className='mt-10 mx-4'>
      <select
        className='px-6 py-3 bg-primary rounded-md text-sm font-bold text-lightText dark:bg-darkPrimary dark:text-primary'
        value={selectedRegion}
        onChange={e => setSelectedRegion(e.target.value)}>
        <option className='font-bold' value='' hidden>
          Filter by Region
        </option>
        <option className='font-bold' value=''>
          All
        </option>
        <option className='font-bold' value='Africa'>
          Africa
        </option>
        <option className='font-bold' value='America'>
          America
        </option>
        <option className='font-bold' value='Asia'>
          Asia
        </option>
        <option className='font-bold' value='Europe'>
          Europe
        </option>
        <option className='font-bold' value='Oceania'>
          Oceania
        </option>
      </select>
    </div>
  )
}

export default RegionFilter
