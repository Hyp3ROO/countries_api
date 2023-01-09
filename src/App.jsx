import { React, useState, useEffect } from 'react'
import { getCountries } from './api'
import CountryList from './components/CountryList'
import NavBar from './components/NavBar'
import RegionFilter from './components/RegionFilter'
import SearchBar from './components/SearchBar'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchCountries = async () => {
    setLoading(true)
    const allCountries = await getCountries()
    setCountries(allCountries)
    setLoading(false)
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  const filteredCountries = countries.filter(country => {
    const countryNameLower = country.name.toLowerCase()
    const countryRegionLower = country.region.toLowerCase()

    return (
      countryNameLower.includes(search.toLowerCase()) ||
      countryRegionLower.includes(search.toLowerCase())
    )
  })

  return (
    <div className='w-full min-h-screen bg-secondary'>
      <NavBar />
      <SearchBar search={search} setSearch={setSearch} />
      <RegionFilter search={search} setSearch={setSearch} />
      {loading ? (
        <p className='mt-10 text-center'>Loading...</p>
      ) : (
        <CountryList countryList={filteredCountries} />
      )}
    </div>
  )
}

export default App
