

export interface VisualCrossingDays {
  conditions: string
  description: string
  temp: number // fahrenheit
  feelslike: number

  tempmin: number
  tempmax: number
  pressure: number
  humidity: number
}
export interface VisualCrossingResponse {
  latitude: number
  longitude: number

  days: VisualCrossingDays[]
}
