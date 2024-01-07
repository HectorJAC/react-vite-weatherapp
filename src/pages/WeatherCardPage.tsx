import { WeatherCard } from "../components/WeatherCard";
import '../styles/weathercardpage.css';

export const WeatherCardPage = () => {

    const ciudades = [
        {
            ciudad: 'Santo Domingo',
            pais: 'DO'
        },
        {
            ciudad: 'Barcelona',
            pais: 'ES'
        },
        {
            ciudad: 'Tokyo',
            pais: 'JP'
        }
    ];

    return (
        <div className="tres-columnas">
            {
                ciudades.map((ciudad) => {
                    return (
                        <WeatherCard   
                            key={ciudad.ciudad}  
                            ciudad={ciudad.ciudad} 
                            pais={ciudad.pais} 
                        />
                    );
                })
            }
        </div>
    );
};