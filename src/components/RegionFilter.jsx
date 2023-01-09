import { React, useState } from 'react'

const RegionFilter = ({ selectedRegion, setSelectedRegion }) => {
  return (
    <div className='mt-10 mx-4'>
      <select
        className='px-6 py-3 bg-primary rounded-md text-sm'
        value={selectedRegion}
        onChange={e => setSelectedRegion(e.target.value)}>
        <option value='' hidden>
          Filter by Region
        </option>
        <option value='Africa'>Africa</option>
        <option value='America'>America</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
      </select>
    </div>
  )
}

export default RegionFilter