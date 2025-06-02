import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-500">404</h1>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Página no encontrada
        </h2>
        <p className="mt-6 text-lg leading-7 text-neutral-600">
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <div className="mt-10">
          <Link to="/">
            <Button 
              variant="primary"
              icon={<Home size={20} />}
            >
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;