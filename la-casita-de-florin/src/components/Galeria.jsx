import { useMemo, useState } from 'react';
import { fotos } from '../data/fotos.js';
import Lightbox from './Lightbox.jsx';

const CATEGORIAS = ['Todas', ...new Set(fotos.map((f) => f.categoria))];

export default function Galeria() {
  const [categoria, setCategoria] = useState('Todas');
  const [indice, setIndice] = useState(null);

  const visibles = useMemo(
    () => (categoria === 'Todas' ? fotos : fotos.filter((f) => f.categoria === categoria)),
    [categoria]
  );

  return (
    <section className="seccion seccion--clara" id="fotos">
      <div className="contenedor">
        <h2 className="titulo">Mirá la casa por dentro y por fuera</h2>
        <p className="texto">Tocá una foto para verla grande. Podés pasar de una a otra con las flechas.</p>

        <div className="filtros" role="group" aria-label="Filtrar fotos por ambiente">
          {CATEGORIAS.map((c) => (
            <button
              key={c}
              type="button"
              className="filtro"
              aria-pressed={categoria === c}
              onClick={() => setCategoria(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <p className="galeria__cuenta" aria-live="polite">
          {visibles.length} {visibles.length === 1 ? 'foto' : 'fotos'}
        </p>

        <div className="galeria">
          {visibles.map((f, i) => (
            <button
              type="button"
              className="galeria__item"
              key={f.id}
              onClick={() => setIndice(i)}
              aria-label={`Ampliar: ${f.alt}`}
            >
              <img
                src={`/fotos/${f.id}-m.webp`}
                alt={f.alt}
                width={f.w}
                height={f.h}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {indice !== null && (
        <Lightbox
          fotos={visibles}
          indice={indice}
          onCambiar={setIndice}
          onCerrar={() => setIndice(null)}
        />
      )}
    </section>
  );
}
