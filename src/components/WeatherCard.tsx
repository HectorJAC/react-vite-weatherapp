import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
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
    
    const weatherData = useQuery<WeatherState>({
        queryKey: ['weather', ciudad, pais],
        queryFn: () => getWeather({ciudad, pais}),
    });

    if (weatherData.isLoading) return <Spinner />;

    return (
        <div className="weathercard">
            <h3 className='titulo-ciudad'>{ciudad}</h3>
            <h4 className='titulo-pais'>{pais}</h4>
            <p className='weather-icono'>
                <WeatherTemperature weather={`${weatherData.data?.weather[0].description}`} />
            </p>
            <p className='temperatura'>
                {weatherData.data?.main.temp} <span> &deg;C </span>
            </p>
        </div>
    );
};