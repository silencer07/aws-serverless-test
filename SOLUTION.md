**Disclamers:**

1. api.openweathermap needs several hours before the api activates, and I have 3 hours limit on taking this test
2. searching for an alternative weather api that accepts zip code took one hour of my time
3. i found one, but this api only supports united states zip code, hence country code not supported
4. i was not able to implement api security due to lack of time

**Design Choices:**

Nothing to explain here, I tried as much as possible to stick with the template

**What would have done if I have more time:**

1. Waited for the openweathermap API key to actually activate. So I can fulfill the country requirement.
2. implement security using JWT. Maybe find a simple and no brainier auth0 provider, else use cognito (Yeah cognito is bad in production)
3. Proper input validation using a Javabean validation framework equivalent in NodeJS

**Github URL:**

https://github.com/silencer07/aws-serverless-test

**How to run:**

Either `serverless offline` if to run locally or `serverless deploy` to actually deploy it to AWS like the URL below

**Working URL:** 

https://tjuv0cgfe1.execute-api.ap-southeast-2.amazonaws.com/

**Request type:** POST

**Body in JSON format:**

```json
{
    "zipCode": 10001
}
```

**Sample Response:**
```json
{
    "lon": -73.99653,
    "lat": 40.750742,
    "main": "Rain, Partially cloudy",
    "description": "Partly cloudy throughout the day with a chance of rain.",
    "temp": 50.5,
    "feels_like": 49.1,
    "temp_min": 45,
    "temp_max": 56,
    "pressure": 1016.1,
    "humidity": 44.1
}
```

**Invalid Body in JSON format:**

```json
{
    "zipCode": ""
}
```

**Invalid Sample response:**

```json
{
    "message": "Invalid zip code",
    "statusCode": 401
}
```


