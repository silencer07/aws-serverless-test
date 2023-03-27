import {WeatherRequest, WeatherResponse, VisualCrossingResponse} from "../@types";
import axios, {AxiosResponse} from "axios"
import {fahrenheitToKelvin} from "../utils";

export const getWeather = async (payload: WeatherRequest): Promise<WeatherResponse> => {
  try {
    const weatherResponse: AxiosResponse<VisualCrossingResponse> = await axios.get<VisualCrossingResponse>(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${payload.zipCode}/today?key=TLPPUARDMPG2NYUB8MU378CZK`
    )

    const weatherData: VisualCrossingResponse = weatherResponse.data
    const today = weatherData.days[0]
    // TODO convert to kelvin
    const response: WeatherResponse = {
      lon: weatherData.longitude,
      lat: weatherData.latitude,
      main: today.conditions,
      description: today.description,

      temp: fahrenheitToKelvin(today.temp),
      feels_like: fahrenheitToKelvin(today.feelslike),
      temp_min: fahrenheitToKelvin(today.tempmin),
      temp_max: fahrenheitToKelvin(today.tempmax),

      pressure: today.pressure,
      humidity: today.humidity,
    }

    return response
  } catch (e) {
    throw new Error(e.message)
  }
};
