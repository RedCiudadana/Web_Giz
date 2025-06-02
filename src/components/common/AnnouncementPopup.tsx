import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Button from './Button';
import { cn } from '../../utils/cn';
import Popup from '../../assets/popup.png'

const AnnouncementPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className={cn(
      "fixed inset-0 z-50 overflow-y-auto",
      isClosing ? "animate-fade-out" : "animate-fade-in"
    )}>
      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
        <div 
          className={cn(
            "fixed inset-0 bg-black transition-opacity",
            isClosing ? "bg-opacity-0" : "bg-opacity-50"
          )} 
          onClick={handleClose} 
        />
        
        <div className={cn(
          "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full sm:max-w-lg",
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        )}>
          <div className="absolute right-2 top-2 z-10">
            <button
              onClick={handleClose}
              className="rounded-full bg-white/80 p-1.5 text-neutral-500 hover:bg-white hover:text-neutral-700 transition-all duration-200 backdrop-blur-sm"
            >
              <X size={18} />
            </button>
          </div>

          <div className="relative">
            <div className="h-32 sm:h-40">
              <img 
                src={Popup}
                alt="Colaboración" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90" />
              <div className="absolute inset-0 flex items-center justify-center p-4 text-white">
                <div>
                  <h4 className="text-lg font-bold mb-1">¡Únete a nuestra iniciativa!</h4>
                  <p className="text-sm text-white/90">Fortaleciendo la transparencia en Centroamérica</p>
                </div>
              </div> */}
            </div>

            <div className="p-4 sm:p-6">
              <div>
                <h3 className="text-xl font-bold text-primary-600 mb-3">
                  Convocatoria Abierta
                </h3>
                
                <div className="space-y-3">
                  <p className="text-sm font-medium text-neutral-900">
                    Invitamos a Organizaciones de Sociedad Civil de Guatemala, Honduras y El Salvador a participar en el proceso de formación y co-creación del Índice de Datos Abiertos para Centroamérica.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-neutral-50 p-3 rounded-lg space-y-1">
                      <p className="text-sm font-medium text-neutral-900">Beneficios:</p>
                      <ul className="text-xs text-neutral-700 space-y-0.5 list-disc list-inside">
                        <li>Capacitación especializada</li>
                        <li>Participación en metodología</li>
                        <li>Networking regional</li>
                      </ul>
                    </div>

                    <div className="bg-primary-50 p-3 rounded-lg space-y-1">
                      <p className="text-sm font-medium text-primary-900">Requisitos:</p>
                      <ul className="text-xs text-primary-700 space-y-0.5 list-disc list-inside">
                        <li>OSC legalmente constituida</li>
                        <li>Experiencia en transparencia</li>
                        <li>Participación activa</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 pt-2">
                    <Button
                      variant="primary"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.location.href = '/participa'}
                    >
                      Aplicar ahora
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={handleClose}
                    >
                      Lo pensaré
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPopup;