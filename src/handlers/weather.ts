import { returnResponse } from "./return";
import {getWeather} from "../services";
import {WeatherRequest} from "../@types/weather";

export const myhandler = async (event) => {
  // TODO add validation
  const request = JSON.parse(event.body) as WeatherRequest
  try{
    const toReturn = await getWeather(request);
    return returnResponse(toReturn)
  } catch (e) {
    return returnResponse({})
  }
}

export const handler = myhandler;
