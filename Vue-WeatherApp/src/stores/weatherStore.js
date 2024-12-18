import { defineStore } from 'pinia'
import axios from 'axios'
import { API_HOST, WEATHER_API } from '../utils/constants/url.constants'

const transformResponse = (res) => {
  const weatherInfo = {
    temp: {},
    condition: {},
    location: '',
  }

  weatherInfo.temp = {
    current: res?.current.temp_c,
    maxTemp: res?.forecast.forecastday[0].day.maxtemp_c,
    minTemp: res?.forecast.forecastday[0].day.mintemp_c,
  }
  weatherInfo.condition = res?.current?.condition
  weatherInfo.location = `${res?.location?.name}, ${res?.location?.region}, ${res?.location?.country}`

  return weatherInfo
}

export const useWeatherStore = defineStore('weatherStore', {
  state: () => ({
    unit: 'C',
    weatherInfo: null,
    loading: false,
    error: null,
  }),
  actions: {
    async getCurrentWeather(locationData) {
      this.loading = true
      this.error = null
      try {
        const response = await axios.post(`${API_HOST}${WEATHER_API}`, { locationData })
        this.weatherInfo = transformResponse(response.data)
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    // setWeather(data) {
    //   this.weatherInfo = data
    //   this.location = data.location
    // },
    setUnit(data) {
      this.unit = data
    },
    convertTemp(data) {
      if (this.unit === 'C') {
        this.weatherInfo.temp = {
          ...convertFahrenheit(data),
        }
        this.unit = 'F'
      } else {
        this.weatherInfo.temp = {
          ...convertCelcius(data),
        }
        this.unit = 'C'
      }
    },
  },
})
