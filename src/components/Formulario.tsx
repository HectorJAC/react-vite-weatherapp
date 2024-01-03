import { Formik, Form } from "formik";
import '../styles/formulario.css';

export const Formulario = () => {
    return (
        <div className="formulario">
            <Formik
                initialValues={{
                    ciudad: '',
                    pais: ''
                }}
                onSubmit={valores => {
                    console.log(valores);
                }}
            >
                <Form>
                    <div className="campo">
                        <label htmlFor="ciudad">Ciudad</label>
                        <input 
                            type="text" 
                            id="ciudad"
                            name="ciudad"
                        />
                    </div>

                    <div className="campo">
                        <label htmlFor="pais">Pais</label>
                        <select
                            id="pais"
                            name="pais"
                        >
                            <option value="">--Seleccione un pais--</option>
                            <option value="US">Estados Unidos</option>
                            <option value="MX">Mexico</option>
                            <option value="AR">Argentina</option>
                            <option value="CO">Colombia</option>
                            <option value="CR">Costa Rica</option>
                            <option value="ES">España</option>
                            <option value="PE">Peru</option>
                            <option value="DO">Republica Dominicana</option>
                        </select>
                    </div>

                    <input type="submit" value="Consultar Clima" />
                </Form>
            </Formik>
        </div>
    );
};
