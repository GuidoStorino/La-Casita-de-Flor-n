import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Casa from './components/Casa.jsx';
import Galeria from './components/Galeria.jsx';
import Comodidades from './components/Comodidades.jsx';
import Ubicacion from './components/Ubicacion.jsx';
import Reservar from './components/Reservar.jsx';
import Pie from './components/Pie.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Casa />
        <Galeria />
        <Comodidades />
        <Ubicacion />
        <Reservar />
      </main>
      <Pie />
    </>
  );
}
