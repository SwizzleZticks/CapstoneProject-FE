import { DailyWeatherComponent } from "../component/daily-weather/daily-weather.component";
import { Hour } from "./hour"

export interface Day {
    dateTime:       string;     // Date and Time
    tempMax:        number;     // High Temps
    tempMin:        number;     // Low Temps
    feelsLike:      number;     // Feels Like temperature
    windSpeed:      number;     // Wind Speed
    windDir:        string;     // Wind Direction
    sunrise:        string;     // Sunrise time
    sunset:         string;     // Sunset time
    humidity:       number;     // Humidity 
    description:    string;     // Weather Conditions
    precipProb:     number;     // Precipitation %
    hours:          Hour[];     // List of hours in the day        // Will need to import 'Hour' from Hour Component
}
