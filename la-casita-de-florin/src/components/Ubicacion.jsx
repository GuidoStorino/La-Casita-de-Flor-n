import { useRef } from 'react';
import { Home, Waves, ExternalLink } from 'lucide-react';
import { casa } from '../data/casa.js';
import { useEnPantalla } from '../hooks.js';

function Recorrido() {
  const ref = useRef(null);
  const visto = useEnPantalla(ref);
  return (
    <div className={`recorrido ${visto ? 'recorrido--en-marcha' : ''}`} ref={ref}>
      <div className="recorrido__extremo">
        <Home size={26} aria-hidden="true" />
        <span>La casita</span>
      </div>

      <div className="recorrido__camino" role="img" aria-label={`Tres cuadras desde la casa hasta la playa, unos ${casa.minutosAPie} minutos caminando`}>
        <ol className="recorrido__cuadras">
          <li>1.ª cuadra</li>
          <li>2.ª cuadra</li>
          <li>3.ª cuadra</li>
        </ol>
        <span className="recorrido__persona" />
      </div>

      <div className="recorrido__extremo">
        <Waves size={26} aria-hidden="true" />
        <span>La playa</span>
      </div>
    </div>
  );
}

export default function Ubicacion() {
  const { lat, lon } = casa.mapa;
  const dLon = 0.022;
  const dLat = 0.013;
  const bbox = [lon - dLon, lat - dLat, lon + dLon, lat + dLat].join('%2C');
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;
  const gmaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${casa.localidad}, Buenos Aires, Argentina`)}`;

  return (
    <section className="seccion seccion--oscura" id="ubicacion">
      <div className="contenedor">
        <h2 className="titulo titulo--claro">A {casa.distanciaPlaya} del mar</h2>
        <p className="texto texto--claro">
          Son unos {casa.minutosAPie} minutos caminando hasta la playa de {casa.localidad}. Vas con la
          sombrilla al hombro y volvés a almorzar a la casa.
        </p>

        <Recorrido />

        <div className="ubicacion__mapa">
          <iframe
            title={`Mapa de ${casa.localidad}`}
            src={src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="ubicacion__pie">
          <p>{casa.direccionPublica}</p>
          <a className="enlace-claro" href={gmaps} target="_blank" rel="noreferrer">
            Abrir en Google Maps <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
