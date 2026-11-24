import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { casa } from '../data/casa.js';
import { whatsappUrl } from '../hooks.js';

const ENLACES = [
  { href: '#la-casa', texto: 'La casa' },
  { href: '#fotos', texto: 'Fotos' },
  { href: '#comodidades', texto: 'Comodidades' },
  { href: '#ubicacion', texto: 'Ubicación' },
  { href: '#reservar', texto: 'Reservar' },
];

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!abierto) return;
    const onKey = (e) => e.key === 'Escape' && setAbierto(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [abierto]);

  const claseHeader = ['cabecera', scroll || abierto ? 'cabecera--solida' : ''].join(' ');
  const mensaje = `Hola, vi la página de ${casa.nombre} y quiero consultar disponibilidad.`;

  return (
    <header className={claseHeader}>
      <div className="cabecera__fila contenedor">
        <a href="#inicio" className="cabecera__marca" onClick={() => setAbierto(false)}>
          {casa.nombre}
        </a>

        <nav className={`cabecera__nav ${abierto ? 'cabecera__nav--abierto' : ''}`} aria-label="Principal">
          {ENLACES.map((e) => (
            <a key={e.href} href={e.href} onClick={() => setAbierto(false)}>
              {e.texto}
            </a>
          ))}
          <a
            className="boton boton--pino boton--chico cabecera__wa"
            href={whatsappUrl(casa.whatsapp, mensaje)}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Escribinos
          </a>
        </nav>

        <button
          type="button"
          className="cabecera__menu"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          onClick={() => setAbierto((v) => !v)}
        >
          {abierto ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}
