import { returnResponse } from "./return";
import {getWeather} from "../services";
import {WeatherRequest} from "../@types/weather";
import {HttpException} from "../utils";

export const myhandler = async (event) => {
  const request = JSON.parse(event.body) as WeatherRequest
  if (request.zipCode !== 0 && !request.zipCode) {
    return returnResponse(new HttpException("Invalid zip code", 401))
  }

  try{
    const toReturn = await getWeather(request);
    return returnResponse(toReturn)
  } catch (e) {
    return returnResponse(new HttpException(e, 503))
  }
}

export const handler = myhandler;
