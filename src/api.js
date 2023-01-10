import axios from 'axios'

const apiURL = 'https://restcountries.com/v3.1/'

const getCountries = async () => {
  const response = await axios.get(`${apiURL}all`)
  const countries = Array.from(response.data)
  const countriesArr = []
  
  countries.forEach(country => {
    const countryInfo = {
      name: country?.name.common,
      nativeName: country?.name.nativeName,
      population: country?.population,
      region: country?.region,
      subRegion: country?.subregion,
      capital: country?.capital,
      topLevelDomain: country?.tld,
    //   currencies: Object.values(country?.currencies),
      languages: country?.languages,
      borders: country?.borders,
      flag: country?.flags.svg
    }
    countriesArr.push(countryInfo)
  })

  return countriesArr
}

export { getCountries }
