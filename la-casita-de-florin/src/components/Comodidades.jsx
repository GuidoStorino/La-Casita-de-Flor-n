import { casa } from '../data/casa.js';
import Icono from './Icono.jsx';

export default function Comodidades() {
  return (
    <section className="seccion" id="comodidades">
      <div className="contenedor">
        <h2 className="titulo">Lo que tiene la casa</h2>
        <p className="texto">Todo lo que vas a usar durante la estadía, tal como se ve en las fotos.</p>

        <ul className="comodidades">
          {casa.comodidades.map((c) => (
            <li className="comodidad" key={c.titulo}>
              <span className="comodidad__icono"><Icono nombre={c.icono} /></span>
              <div>
                <h3 className="comodidad__titulo">{c.titulo}</h3>
                <p className="comodidad__texto">{c.texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
