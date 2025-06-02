import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Layouts
import MainLayout from './layouts/MainLayout';

// Components
import AnnouncementPopup from './components/common/AnnouncementPopup';

// Pages
import Home from './pages/Home';
import DatosAbiertos from './pages/DatosAbiertos';
import Medicion from './pages/Medicion';
import Talleres from './pages/Talleres';
import Participa from './pages/Participa';
import NotFound from './pages/NotFound';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time and fade out loading screen
  setTimeout(() => {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('fade-out');
      setTimeout(() => setIsLoading(false), 300);
    }
  }, 1000);

  return (
    <>
      {isLoading && (
        <div className="loading-screen">
          <img src="https://www.redciudadana.org/assets/img/red/loader.gif" alt="Loading..." className="w-16 h-16" />
        </div>
      )}
      <AnnouncementPopup />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="datos-abiertos" element={<DatosAbiertos />} />
          <Route path="medicion" element={<Medicion />} />
          <Route path="talleres" element={<Talleres />} />
          <Route path="participa" element={<Participa />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;