import { Formulario } from '../components/Formulario';
import { ClimaMostrado } from '../components/ClimaMostrado';

import '../styles/weatherpage.css';

export const WeatherPage = () => {
    return (
        <div className='dos-columnas'>
            <Formulario 
                ciudad=''
                pais=''
            />
            <ClimaMostrado 
                ciudad=''
                pais=''
            />
        </div>
    );
};