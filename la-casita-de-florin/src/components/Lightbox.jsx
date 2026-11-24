import { useCallback, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Lightbox({ fotos, indice, onCambiar, onCerrar }) {
  const botonCerrar = useRef(null);
  const toqueX = useRef(null);
  const total = fotos.length;
  const foto = fotos[indice];

  const anterior = useCallback(() => onCambiar((indice - 1 + total) % total), [indice, total, onCambiar]);
  const siguiente = useCallback(() => onCambiar((indice + 1) % total), [indice, total, onCambiar]);

  // Teclado
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onCerrar();
      else if (e.key === 'ArrowLeft') anterior();
      else if (e.key === 'ArrowRight') siguiente();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [anterior, siguiente, onCerrar]);

  // Bloquea el scroll de fondo y devuelve el foco al cerrar
  useEffect(() => {
    const previo = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    botonCerrar.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      previo?.focus?.();
    };
  }, []);

  // Precarga las fotos vecinas
  useEffect(() => {
    [fotos[(indice + 1) % total], fotos[(indice - 1 + total) % total]].forEach((f) => {
      const img = new Image();
      img.src = `/fotos/${f.id}.webp`;
    });
  }, [indice, fotos, total]);

  const onTouchStart = (e) => (toqueX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (toqueX.current === null) return;
    const dx = e.changedTouches[0].clientX - toqueX.current;
    toqueX.current = null;
    if (Math.abs(dx) > 50) (dx > 0 ? anterior : siguiente)();
  };

  return (
    <div
      className="visor"
      role="dialog"
      aria-modal="true"
      aria-label="Galería de fotos"
      onClick={onCerrar}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        ref={botonCerrar}
        type="button"
        className="visor__boton visor__cerrar"
        aria-label="Cerrar galería"
        onClick={onCerrar}
      >
        <X size={26} />
      </button>

      {total > 1 && (
        <button
          type="button"
          className="visor__boton visor__prev"
          aria-label="Foto anterior"
          onClick={(e) => { e.stopPropagation(); anterior(); }}
        >
          <ChevronLeft size={30} />
        </button>
      )}

      <figure className="visor__figura" onClick={(e) => e.stopPropagation()}>
        <img key={foto.id} src={`/fotos/${foto.id}.webp`} alt={foto.alt} className="visor__img" />
        <figcaption className="visor__pie">
          <span>{foto.alt}</span>
          <span className="visor__cuenta">{indice + 1} de {total}</span>
        </figcaption>
      </figure>

      {total > 1 && (
        <button
          type="button"
          className="visor__boton visor__next"
          aria-label="Foto siguiente"
          onClick={(e) => { e.stopPropagation(); siguiente(); }}
        >
          <ChevronRight size={30} />
        </button>
      )}
    </div>
  );
}
