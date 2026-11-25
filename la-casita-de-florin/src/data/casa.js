// Todo lo que cambia de una casa a otra vive acá. Editá estos datos y la página se actualiza sola.

export const casa = {
  nombre: 'La casita de Florín',
  localidad: 'Mar del Tuyú',
  zona: 'Costa Atlántica, provincia de Buenos Aires',
  distanciaPlaya: '3 cuadras',
  minutosAPie: 5,

  // PENDIENTE: poné tu número con código de país, sin + ni espacios (Argentina celular: 549 + código de área + número).
  whatsapp: '5491130360609',

  // PENDIENTE: verificá que sean correctos para la casa.
  capacidad: 6,
  camas: 'Una cama matrimonial, una cucheta, una cama individual y una cama nido en el living',

  // Ubicación aproximada que muestra el mapa. Reemplazá por las coordenadas de la casa
  // (en Google Maps: clic derecho sobre el punto y copiar las coordenadas).
  mapa: { lat: -36.566706982786414, lon: -56.69372387579774 }, 
  direccionPublica: 'Te pasamos la dirección exacta al confirmar la reserva.',

  // Comodidades que se ven en las fotos. Sumá o sacá las que correspondan.
  // Íconos disponibles: cocina, heladera, parrilla, patio, agua, tv, cama, bano, sillon, seguridad, calle, mesa
  comodidades: [
    { icono: 'patio', titulo: 'Patio propio', texto: 'Espacio al aire libre con plantas, para el mate y la sobremesa.' },
    { icono: 'parrilla', titulo: 'Parrilla en el patio', texto: 'Parrilla de material con mesada, lista para un asado.' },
    { icono: 'auto', titulo: 'Estacionamiento', texto: 'Lugar en el frente de la casa para estacionar el auto.' },
    { icono: 'cocina', titulo: 'Cocina a gas con garrafa', texto: 'Cocina a gas con garrafa y bacha con mesada.' },
    { icono: 'cubiertos', titulo: 'Cubiertos', texto: 'La casita cuenta con vajilla y cubiertos.' },
    { icono: 'mesa', titulo: 'Comedor con mesa redonda', texto: 'Mesa con sillas de pino y sillones con almohadones.' },
    { icono: 'bano', titulo: 'Dos baños con ducha', texto: 'Uno de ellos con bidet.' },
    { icono: 'agua', titulo: 'Agua caliente', texto: 'Termotanque para tener agua caliente.' },
    { icono: 'heladera', titulo: 'Heladera con freezer', texto: 'Heladera de dos puertas para toda la estadía.' },
    { icono: 'cama', titulo: 'Dos dormitorios', texto: 'Uno con cama matrimonial y placard, otro con cucheta y cama individual.' },
    { icono: 'frazada', titulo: 'Frazadas', texto: 'Equipada con frazadas para las noches frescas.' },
    { icono: 'sillon', titulo: 'Cama nido en el living', texto: 'Lugar extra para dormir sin ocupar un dormitorio.' },
    
    
    
    
  
  ],

  // Comodidades que NO aparecen en las fotos y conviene confirmar para sumarlas arriba:
  // wifi, ropa blanca (sábanas y toallas), vajilla completa, ventilador o aire, calefacción,
  // lavarropas, cochera, si aceptan mascotas, si hay mosquiteros.

  // Tarifas: la sección solo aparece si completás al menos un precio.
  tarifas: [
    { temporada: 'Temporada alta', detalle: 'Vacaciones de verano', precio: null },
    { temporada: 'Temporada media', detalle: 'Fines de semana largos y vacaciones de invierno', precio: null },
    { temporada: 'Temporada baja', detalle: 'El resto del año', precio: null },
  ],
  monedaTarifa: 'por noche', // o 'por semana', 'por mes'

  // Condiciones: solo se muestran las que completes (texto) en "Antes de reservar".
  condiciones: {
    checkIn: null, // ej: 'Desde las 14 h'
    checkOut: null, // ej: 'Hasta las 10 h'
    mascotas: null, // ej: 'Consultar'
    deposito: null, // ej: 'Se pide una seña del 30% para reservar'
    minimoNoches: null, // ej: 'Mínimo 3 noches en temporada alta'
  },
};
