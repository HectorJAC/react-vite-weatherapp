import { WeatherCard } from "../components/WeatherCard";
import '../styles/weathercardpage.css';

export const WeatherCardPage = () => {
    return (
        <div className="tres-columnas">
            {
                [1,2,3].map((item) => {
                    return <WeatherCard key={item} />
                })
            }
        </div>
    );
};