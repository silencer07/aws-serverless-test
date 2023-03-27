import {WeatherRequest, WeatherResponse} from "../@types/weather";
import axios, {AxiosResponse} from "axios"
import {VisualCrossingResponse} from "../@types/visual-crossing";

export const getWeather = async (payload: WeatherRequest): Promise<WeatherResponse> => {
  try {
    const weatherResponse: AxiosResponse<VisualCrossingResponse> = await axios.get<VisualCrossingResponse>(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${payload.zipCode}/today?key=TLPPUARDMPG2NYUB8MU378CZK`
    )

    const weatherData: VisualCrossingResponse = weatherResponse.data
    const today = weatherData.days[0]
    const response: WeatherResponse = {
      lon: weatherData.longitude,
      lat: weatherData.latitude,
      main: today.conditions,
      description: today.description,
      temp: today.temp,
      feels_like: today.feelslike,
      temp_min: today.tempmin,
      temp_max: today.tempmax,
      pressure: today.pressure,
      humidity: today.humidity,
    }

    return response
  } catch (e) {
    throw new Error("An error occurred while submitting request to weather API")
  }
};
