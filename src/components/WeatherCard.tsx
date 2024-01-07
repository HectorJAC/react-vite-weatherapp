import { useEffect, useState, FC } from 'react';
import { getWeather } from '../api/openWeatherMapApi';
import { WeatherTemperature } from './WeatherTemperature';
import { Spinner } from './Spinner';
import '../styles/weathercard.css';

interface WeatherState {
    main: {
        temp: number;
    },
    weather: [
        {
            description: string;
        }
    ]
}

interface WeatherCardProps {
    ciudad: string;
    pais: string;
}

export const WeatherCard:FC<WeatherCardProps> = ({ciudad, pais}) => {
    
    const [weather, setWeather] = useState<WeatherState>();

    useEffect(() => {
        getWeather({ciudad, pais}).then((data) => {
            setWeather(data);
        });
    }, [ciudad, pais]);

    if (!weather) return <Spinner />;

    return (
        <div className="weathercard">
            <h3 className='titulo-ciudad'>{ciudad}</h3>
            <h4 className='titulo-pais'>{pais}</h4>
            <p className='weather-icono'>
                <WeatherTemperature weather={`${weather?.weather[0].description}`} />
            </p>
            <p className='temperatura'>
                {weather?.main.temp} <span> &deg;C </span>
            </p>
        </div>
    );
};