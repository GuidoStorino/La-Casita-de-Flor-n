import {
  CookingPot, Refrigerator, Flame, Trees, Droplets, Tv, BedDouble, ShowerHead,
  Armchair, ShieldCheck, Sprout, Utensils, Car, Circle, Bed,
} from 'lucide-react';

const ICONOS = {
  cocina: CookingPot,
  heladera: Refrigerator,
  parrilla: Flame,
  patio: Trees,
  agua: Droplets,
  tv: Tv,
  cama: BedDouble,
  bano: ShowerHead,
  sillon: Armchair,
  seguridad: ShieldCheck,
  calle: Sprout,
  mesa: Circle,
  cubiertos: Utensils,
  auto: Car,
  frazada: Bed,
};

export default function Icono({ nombre, size = 22 }) {
  const Componente = ICONOS[nombre] ?? Trees;
  return <Componente size={size} strokeWidth={1.75} aria-hidden="true" />;
}

