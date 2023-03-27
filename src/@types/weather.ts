
export interface WeatherRequest {
  zipCode: number
}

/**
 * {
 *         "lon": 150.8667,
 *         "lat": -33.7167,
 *         "main": "Clouds",
 *         "description": "overcast clouds",
 *         "temp": 290.27,
 *         "feels_like": 290.23,
 *         "temp_min": 288.57,
 *         "temp_max": 291.11,
 *         "pressure": 1028,
 *         "humidity": 84
 *     }
 */

export interface WeatherResponse {
  lon: number
  lat: number
  main: string
  description: string
  temp: number // kelvin
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}
