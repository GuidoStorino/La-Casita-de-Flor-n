import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { casa } from '../data/casa.js';
import { whatsappUrl } from '../hooks.js';

const hoy = () => {
  const d = new Date();
  const mes = String(d.getMonth() + 1).padStart(2, '0');
  const dia = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${mes}-${dia}`;
};

// '2027-01-12' -> '12/01/2027' (sin pasar por Date, para evitar corrimientos de zona horaria)
const formatear = (iso) => iso.split('-').reverse().join('/');

const noches = (desde, hasta) => Math.round((new Date(hasta) - new Date(desde)) / 86400000);

const CONDICIONES = [
  ['checkIn', 'Ingreso'],
  ['checkOut', 'Salida'],
  ['minimoNoches', 'Estadía mínima'],
  ['mascotas', 'Mascotas'],
  ['deposito', 'Seña'],
];

export default function Reservar() {
  const [datos, setDatos] = useState({ nombre: '', desde: '', hasta: '', personas: '2' });
  const [error, setError] = useState('');

  const cambiar = (e) => {
    setDatos((d) => ({ ...d, [e.target.name]: e.target.value }));
    setError('');
  };

  const enviar = (e) => {
    e.preventDefault();
    if (!datos.desde || !datos.hasta) return setError('Elegí la fecha de llegada y la de salida.');
    if (datos.hasta <= datos.desde) return setError('La salida tiene que ser después de la llegada.');

    const n = noches(datos.desde, datos.hasta);
    const quien = datos.nombre.trim() ? ` Soy ${datos.nombre.trim()}.` : '';
    const mensaje =
      `Hola, quiero consultar disponibilidad en ${casa.nombre} (${casa.localidad}). ` +
      `Llegaríamos el ${formatear(datos.desde)} y saldríamos el ${formatear(datos.hasta)} ` +
      `(${n} ${n === 1 ? 'noche' : 'noches'}), somos ${datos.personas} ${datos.personas === '1' ? 'persona' : 'personas'}.${quien}`;
    window.open(whatsappUrl(casa.whatsapp, mensaje), '_blank', 'noopener');
  };

  const hayTarifas = casa.tarifas.some((t) => t.precio);
  const condiciones = CONDICIONES.filter(([k]) => casa.condiciones[k]);

  return (
    <section className="seccion seccion--clara" id="reservar">
      <div className="contenedor reservar">
        <div>
          <h2 className="titulo">Consultá si está libre</h2>
          <p className="texto">
            Completá las fechas y se abre WhatsApp con el mensaje listo para enviar. Te respondemos
            con la disponibilidad y el precio.
          </p>

          <form className="formulario" onSubmit={enviar} noValidate>
            <div className="formulario__fila">
              <label className="campo">
                <span>Llegada</span>
                <input type="date" name="desde" min={hoy()} value={datos.desde} onChange={cambiar} required />
              </label>
              <label className="campo">
                <span>Salida</span>
                <input type="date" name="hasta" min={datos.desde || hoy()} value={datos.hasta} onChange={cambiar} required />
              </label>
            </div>
            <div className="formulario__fila">
              <label className="campo">
                <span>Personas</span>
                <select name="personas" value={datos.personas} onChange={cambiar}>
                  {Array.from({ length: casa.capacidad }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </label>
              <label className="campo">
                <span>Tu nombre (opcional)</span>
                <input type="text" name="nombre" autoComplete="name" value={datos.nombre} onChange={cambiar} />
              </label>
            </div>

            <p className="formulario__error" role="alert">{error}</p>

            <button type="submit" className="boton boton--marino">
              <MessageCircle size={18} aria-hidden="true" />
              Consultar por WhatsApp
            </button>
          </form>
        </div>

        <div className="reservar__info">
          {hayTarifas && (
            <div className="tarifas">
              <h3 className="subtitulo">Tarifas</h3>
              <dl>
                {casa.tarifas.filter((t) => t.precio).map((t) => (
                  <div className="tarifa" key={t.temporada}>
                    <dt>
                      {t.temporada}
                      <small>{t.detalle}</small>
                    </dt>
                    <dd>{t.precio} <small>{casa.monedaTarifa}</small></dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div className="preguntas">
            <h3 className="subtitulo">Antes de reservar</h3>
            <details>
              <summary>¿Cómo reservo?</summary>
              <p>Escribinos por WhatsApp con las fechas y la cantidad de personas. Si está libre, te confirmamos el precio y cómo dejar la reserva.</p>
            </details>
            <details>
              <summary>¿Dónde queda exactamente?</summary>
              <p>En {casa.localidad}, a {casa.distanciaPlaya} de la playa. {casa.direccionPublica}</p>
            </details>
            <details>
              <summary>¿Cuántas personas entran?</summary>
              <p>Hasta {casa.capacidad}. {casa.camas}.</p>
            </details>
            {condiciones.length > 0 && (
              <details>
                <summary>Condiciones de la estadía</summary>
                <ul>
                  {condiciones.map(([k, rotulo]) => (
                    <li key={k}><strong>{rotulo}:</strong> {casa.condiciones[k]}</li>
                  ))}
                </ul>
              </details>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
