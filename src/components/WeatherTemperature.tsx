import { FC } from "react";
import { IconContext } from "react-icons";
import { CiSun, CiCloudSun, CiCloud } from "react-icons/ci";
import { BsClouds } from "react-icons/bs";
import { FaCloudShowersHeavy, FaCloudSunRain, FaRegSnowflake } from "react-icons/fa";
import { IoThunderstorm } from "react-icons/io5";
import { RiWindyFill } from "react-icons/ri";
import {
    BROKEN_CLOUDS,
    CLEAR_SKY,
    FEW_CLOUDS,
    RAIN,
    SCATTERED_CLOUDS,
    SHOWER_RAIN,
    SNOW,
    THUNDERSTORM,
    WINDY
} from '../helpers/weatherConstants';

interface WeatherTemperatureProps {
    weather: string;
}

export const WeatherTemperature:FC<WeatherTemperatureProps> = ({ weather }) => {
    const weatherIcon = (weather: string) => {
        switch (weather) {
            case CLEAR_SKY:
                return <CiSun />;
            case FEW_CLOUDS:
                return <CiCloudSun />;
            case SCATTERED_CLOUDS:
                return <BsClouds />;
            case BROKEN_CLOUDS:
                return <CiCloud />;
            case SHOWER_RAIN:
                return <FaCloudSunRain />;
            case RAIN:
                return <FaCloudShowersHeavy />;
            case THUNDERSTORM:
                return <IoThunderstorm />;
            case SNOW:
                return <FaRegSnowflake />;
            case WINDY:
                return <RiWindyFill />;
            default:
                return <BsClouds />;
        }
    }

    return (
        <IconContext.Provider value={{ size: "5em" }}>
            {weatherIcon(weather)}
        </IconContext.Provider>
    );
};

