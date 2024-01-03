import axios from "axios";
import { url_base } from "../helpers/urls";

interface Props {
    ciudad: string;
    pais: string;
}

export const openWeatherMapApi = async ({ ciudad, pais }: Props) => {
    const appId = import.meta.env.VITE_API_KEY;
    const url = `${url_base}/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`;

    const { data } = await axios.get(url);
    const { lat, lon } = data[0];

    const urlClima = `${url_base}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
    const { data: clima } = await axios.get(urlClima);
    return clima;
};
