import { useEffect, useState } from 'react';

// Devuelve true cuando el elemento entra en pantalla (una sola vez).
export function useEnPantalla(ref, umbral = 0.4) {
  const [visto, setVisto] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || visto) return;
    if (!('IntersectionObserver' in window)) {
      setVisto(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisto(true);
          obs.disconnect();
        }
      },
      { threshold: umbral }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, umbral, visto]);
  return visto;
}

export function whatsappUrl(numero, mensaje) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}
