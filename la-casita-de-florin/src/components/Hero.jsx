import { casa } from '../data/casa.js';
import { Images } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <img
        className="hero__foto"
        src="/fotos/living-escalera.webp"
        srcSet="/fotos/living-escalera-m.webp 800w, /fotos/living-escalera.webp 2400w"
        sizes="100vw"
        alt="Living-comedor de la casa con escalera de pino y mesa redonda"
        fetchPriority="high"
      />
      <div className="hero__velo" />
      <div className="hero__contenido contenedor">
        <h1 className="hero__titulo">{casa.nombre}</h1>
        <p className="hero__bajada">
          Casa en alquiler en {casa.localidad}, a {casa.distanciaPlaya} de la playa. Dos dormitorios,
          dos baños, patio con parrilla y lugar para {casa.capacidad} personas.
        </p>
        <div className="hero__acciones">
          <a className="boton boton--pino" href="#reservar">Consultar disponibilidad</a>
          <a className="boton boton--borde" href="#fotos">
            <Images size={18} aria-hidden="true" />
            Ver las fotos
          </a>
        </div>
      </div>
    </section>
  );
}
