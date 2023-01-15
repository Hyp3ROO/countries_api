import axios from 'axios'

const apiURL = 'https://restcountries.com/v3.1/'

const getCountries = async () => {
  const response = await axios.get(`${apiURL}all`)
  return response.data
}

const getOneCountry = async country => {
  const response = await axios.get(`${apiURL}name${country}`)
  return response.data
}

export { getCountries, getOneCountry }
