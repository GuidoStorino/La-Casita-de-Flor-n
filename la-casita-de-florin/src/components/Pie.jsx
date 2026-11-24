import { casa } from '../data/casa.js';

export default function Pie() {
  return (
    <footer className="pie">
      <div className="contenedor pie__fila">
        <strong>{casa.nombre}</strong>
        <span>Casa en alquiler en {casa.localidad}, {casa.zona}.</span>
      </div>
    </footer>
  );
}
