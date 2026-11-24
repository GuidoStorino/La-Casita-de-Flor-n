import { casa } from '../data/casa.js';

const AMBIENTES = [
  {
    titulo: 'Abajo',
    foto: 'living-comedor',
    alt: 'Living-comedor de planta baja',
    texto:
      'Living-comedor con mesa redonda, sillones y una cama nido. La cocina está a continuación, con heladera con freezer y cocina a gas con horno, y una puerta que da directo al patio. El baño de planta baja tiene ducha.',
  },
  {
    titulo: 'Arriba',
    foto: 'dormitorio-cucheta',
    alt: 'Dormitorio del piso superior con techo de madera',
    texto:
      'Una escalera de pino lleva a dos dormitorios con techo de madera. Uno tiene cama matrimonial y placard; el otro, cucheta y una cama individual. También hay un segundo baño con ducha y bidet.',
  },
  {
    titulo: 'Afuera',
    foto: 'patio',
    alt: 'Patio con parrilla de material',
    texto:
      'Patio propio con parrilla de material, tendedero y plantas. Es el lugar para el asado y el mate después de la playa.',
  },
];

export default function Casa() {
  return (
    <section className="seccion" id="la-casa">
      <div className="contenedor casa">
        <div className="casa__intro">
          <h2 className="titulo">Una casa de madera y ladrillo, pensada para vacacionar en familia</h2>
          <p className="texto">
            La casita está en {casa.localidad}, {casa.zona}. Tiene dos plantas, mucha madera de pino y un
            patio con parrilla. Duermen hasta {casa.capacidad} personas: {casa.camas.toLowerCase()}.
          </p>
        </div>

        <div className="casa__ambientes">
          {AMBIENTES.map((a) => (
            <article className="ambiente" key={a.titulo}>
              <div>
                <h3 className="subtitulo">{a.titulo}</h3>
                <p className="texto">{a.texto}</p>
              </div>
              <img
                className="ambiente__foto"
                src={`/fotos/${a.foto}-m.webp`}
                alt={a.alt}
                loading="lazy"
                width="320"
                height="240"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
