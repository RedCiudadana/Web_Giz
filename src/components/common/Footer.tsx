import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h4 className="text-xl font-bold mb-4">Conecta Datos</h4>
            <p className="text-neutral-300 mb-4">
              Comunidad regional que impulsa el uso de datos abiertos en Centroamérica para la participación ciudadana y la rendición de cuentas.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Social media icons placeholder */}
              <a href="#" className="text-white hover:text-secondary-500 transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-white hover:text-secondary-500 transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-white hover:text-secondary-500 transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-xl font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-300 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/datos-abiertos" className="text-neutral-300 hover:text-white transition-colors">Datos Abiertos</Link></li>
              <li><Link to="/medicion" className="text-neutral-300 hover:text-white transition-colors">Medición Regional</Link></li>
              <li><Link to="/talleres" className="text-neutral-300 hover:text-white transition-colors">Talleres</Link></li>
              <li><Link to="/participa" className="text-neutral-300 hover:text-white transition-colors">Participa</Link></li>
            </ul>
          </div>
          
          {/* Organizations */}
          {/* <div>
            <h4 className="text-xl font-bold mb-4">Organismos de Apoyo</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.bmz.de/en " className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                  BMZ <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="https://www.giz.de/" className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                  GIZ <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                  SECOSEFIN <ExternalLink size={14} />
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <Link to="/participa" className="text-white font-medium hover:text-secondary-500 transition-colors">OSC participantes</Link>
            </div>
          </div> */}
          
          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              {/* <li className="flex items-start gap-2">
                <MapPin className="text-secondary-500 mt-1 shrink-0" size={18} />
                <span className="text-neutral-300">Centroamérica: Guatemala, El Salvador, Honduras</span>
              </li> */}
              <li className="flex items-center gap-2">
                <Mail className="text-primary-500 shrink-0" size={18} />
                <a href="mailto:info@conectadatos.org" className="text-neutral-300 hover:text-white transition-colors">info@redciudadana.org</a>
              </li>
              {/* <li className="flex items-center gap-2">
                <Phone className="text-secondary-500 shrink-0" size={18} />
                <a href="https://chat.whatsapp.com/FtmG1Qa6bc74cLyBIMPp8d " className="text-neutral-300 hover:text-white transition-colors">Enlace a grupo de whatsapp</a>
              </li> */}
            </ul>
          </div>
        </div>
        
        <hr className="border-neutral-700 my-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400">
          <div>
            &copy; {year} Conecta Datos. Todos los derechos reservados.
          </div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link to="#" className="hover:text-white transition-colors">Términos de Uso</Link>
            <Link to="#" className="hover:text-white transition-colors">Aviso Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;