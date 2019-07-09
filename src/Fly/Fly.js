import React from 'react';
import AppContext from '../AppContext';
import './Fly.css';





class Fly extends React.Component {
    static contextType = AppContext;
    render() {

        return (
            <div>
                <div>
                    <p className="fly-text"><h5> ¿En qué lugares de Montevideo se podrá volar un dron? Se habilitaron cuatro parques </h5></p>
                </div>
                <div class="map_container">
                    <iframe  className="fly-iframe" title="Mapa de ruta" src={"https://maps.google.com/maps?width=100%&height=600&hl=es&coord=-34.86819105021703,-56.017184257507324&q=Parque%20Roussvelt+(FLy)&ie=UTF8&t=&z=16&iwloc=B&output=embed"}><a href="https://www.mapsdirections.info/calcular-ruta.html">""</a></iframe>
               </div>
                <div>
                    <p className="fly-text">La Intendencia de Montevideo, la Fuerza Aérea Uruguaya y la Dinacia determinaron cuatro parques de Montevideo en los que se va a poder volar un dron.</p>

                    <p className="fly-text">Según el comunicado se eligieron lugares a raíz de “la necesidad de establecer espacios para la actividad de los dispositivos Aéreos Operados a Distancia (conocido como drones), dentro del departamento de Montevideo”.<br /><br /><b>Sobrevolar drones en las zonas pobladas de la capital está prohibido</b> y por eso la FAU, la Dinacia y la Intendencia de Montevideo resolvieron lugares específicos, luego de realizar informes técnicos, en los que sí se va a poder llevar a cabo esta actividad:</p>
                    <p className="fly-text">La zona norte el <b>parque Arquitecto Eugenio Baroffio</b>; la zona cercada a ruta 8 del <b>parque Marcos Sastre</b>; el tramo entre Silva y Bulevar Aparicio Saravia en el <b>parque Miguelete </b>y finalmente en el <b>parque Tomikson</b> –excepto el espacio concedido al equipo “Naranja Mecánica”, de baby fútbol. <br /></p>
                    <p className="fly-text"><b>La altura máxima que podrá alcanzar un dron será de 30 metros</b>, tomando en referencia el nivel del piso. Además el dispositivo no puede pesar más de 25 kilos.&nbsp;<br /></p>
                    <p className="fly-text">En el comunicado se aclaró que la "autoridad aeronáutica se reserva la potestad de suspender o revocar por razones de seguridad operacional las zonas designadas anteriormente" y además que en los lugares designados el uso del dron será "exclusivo para deporte o recreación".<br /></p>

                </div>
            </div>
        )
    };
}
export default Fly;



