import { FC, useState } from 'react';
import { Formulario } from '../components/Formulario';
import { ClimaMostrado } from '../components/ClimaMostrado';
import { FormularioProps } from '../interfaces/formularioProps';
import '../styles/weatherpage.css';

export const WeatherPage:FC = () => {

    const [formData, setFormData] = useState<FormularioProps>({
        ciudad: '',
        pais: '',
    });

    const handleFormSubmit = (data: FormularioProps) => {
        setFormData(data);
    };

    return (
        <div className='dos-columnas'>
            <Formulario 
                onFormSubmit={handleFormSubmit}
            />
            <ClimaMostrado 
                formData={formData}
            />
        </div>
    );
};