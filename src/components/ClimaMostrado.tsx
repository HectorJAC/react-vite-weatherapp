import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getWeather } from '../api/openWeatherMapApi';
import { Spinner } from './Spinner';
import { WeatherTemperature } from './WeatherTemperature';
import { FormularioProps } from '../interfaces/formularioProps';

interface ClimaMostradoProps {
    formData: FormularioProps;
}

export const ClimaMostrado: FC<ClimaMostradoProps> = ({ formData }) => {

    const { ciudad, pais } = formData;

    const weatherResult = useQuery({
        queryKey: ['weather', ciudad, pais],
        queryFn: () => getWeather({ ciudad, pais }),
    });

    if (!ciudad || !pais) {
        return null;
    }

    if (weatherResult.isFetching) {
        return <Spinner />;
    }

    return (
        <div className="weathercard">
            <h3 className='titulo-ciudad'>{ciudad}</h3>
            <h4 className='titulo-pais'>{pais}</h4>
            <p className='weather-icono'>
                <WeatherTemperature weather={`${weatherResult.data?.weather[0].description}`} />
            </p>
            <p className='temperatura'>
                {weatherResult.data?.main.temp} <span> &deg;C </span>
            </p>
        </div>
    );
};