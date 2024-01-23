import { FC, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getWeather } from '../api/openWeatherMapApi';
import { FormularioProps } from '../interfaces/formularioProps';
import '../styles/formulario.css';

interface FormProps {
    onFormSubmit: (data: FormularioProps) => void;
}

export const Formulario: FC<FormProps> = ({ onFormSubmit }) => {
    
    const [busqueda, setBusqueda] = useState<FormularioProps>({ ciudad: '', pais: ''});

    const weatherResult = useQuery({
        queryKey: ['weather', busqueda.ciudad, busqueda.pais],
        queryFn: () => getWeather({ 
            ciudad: busqueda.ciudad, 
            pais: busqueda.pais
         }),
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await weatherResult.refetch();

        onFormSubmit(busqueda);
    };

    return (
        <div className="formulario">
           <form onSubmit={handleSubmit}>
                <div className="campo">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input 
                        type="text" 
                        id="ciudad"
                        name="ciudad"
                        onChange={handleChange}
                        value={busqueda.ciudad}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="pais">Pais</label>
                    <select
                        id="pais"
                        name="pais"
                        onChange={handleChange}
                        value={busqueda.pais}
                    >
                        <option value="">--Seleccione un pais--</option>
                        <option value="US">Estados Unidos</option>
                        <option value="JP">Japon</option>
                        <option value="AR">Argentina</option>
                        <option value="GB">Reindo Unido</option>
                        <option value="CA">Canada</option>
                        <option value="ES">España</option>
                        <option value="IT">Italia</option>
                        <option value="DO">Republica Dominicana</option>
                    </select>
                </div>

                <input type="submit" value="Consultar Clima" />
           </form>
        </div>
    );
};