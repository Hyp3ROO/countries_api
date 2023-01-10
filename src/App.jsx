import { React, useState, useEffect } from 'react'
import { getCountries } from './api'
import CountryList from './components/CountryList'
import NavBar from './components/NavBar'
import RegionFilter from './components/RegionFilter'
import SearchBar from './components/SearchBar'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')
  const [loading, setLoading] = useState(false)
  const [theme, setTheme] = useState('dark')

  const fetchCountries = async () => {
    setLoading(true)
    const allCountries = await getCountries()
    setCountries(allCountries)
    setLoading(false)
  }

  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  useEffect(() => {
    switch (theme) {
      case 'dark':
        document.body.classList.add('dark')
        break
      case 'light':
        document.body.classList.remove('dark')
        break
    }
  }, [theme])

  useEffect(() => {
    fetchCountries()
  }, [])

  const filteredCountries = countries.filter(country => {
    const countryNameLower = country.name.toLowerCase()
    const countryRegionLower = country.region.toLowerCase()

    return (
      countryNameLower.includes(search.toLowerCase()) &&
      countryRegionLower.includes(selectedRegion.toLowerCase())
    )
  })

  return (
    <div className='w-full min-h-screen bg-secondary dark:bg-darkSecondary'>
      <NavBar theme={theme} changeTheme={changeTheme} />
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
    </div>
  )
}

export default App
