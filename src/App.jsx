import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getCountries } from './api'
import CountryInfo from './components/CountryInfo'
import Main from './pages/Main'
import NavBar from './components/NavBar'
import useDebounceSearch from './hooks/use-debounce-search'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')
  const [theme, setTheme] = useState('dark')
  const [loading, setLoading] = useState(false)
  const debounceSearch = useDebounceSearch(search)

  const fetchCountries = async () => {
    setLoading(true)
    const allCountries = await getCountries()
    setCountries(allCountries)
    setLoading(false)
  }

  const filteredCountries = countries.filter(country => {
    const countryNameLower = country.name.common.toLowerCase()
    const countryRegionLower = country.region.toLowerCase()

    return (
      countryNameLower.includes(debounceSearch.toLowerCase()) &&
      countryRegionLower.includes(selectedRegion.toLowerCase())
    )
  })

  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  useEffect(() => {
    fetchCountries()
  }, [])

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

  return (
    <div className='w-full min-h-screen bg-secondary dark:bg-darkSecondary'>
      <NavBar theme={theme} changeTheme={changeTheme} />
      <Routes>
        <Route
          path='/'
          element={
            <Main
              filteredCountries={filteredCountries}
              search={search}
              setSearch={setSearch}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
              loading={loading}
              theme={theme}
            />
          }
        />
        <Route
          path='/details/:name'
          element={
            <CountryInfo theme={theme} />
          }
        />
      </Routes>
    </div>
  )
}

export default App
