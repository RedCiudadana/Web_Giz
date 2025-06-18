import { useState, useEffect } from 'react';
import { ArrowRight, Database, BarChart3, BookOpen, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Section from '../components/common/Section';
import Card, { CardContent } from '../components/common/Card';
import { cn } from '../utils/cn';
import Slider from '../assets/slider/GIZ_CD_03.png';
import SliderTop from '../assets/slider/GIZ_CD_02.png';
import Icon1 from '../assets/iconos/GIZ_CD-06.png';
import Icon2 from '../assets/iconos/GIZ_CD-07.png';
import Icon3 from '../assets/iconos/GIZ_CD-08.png';
import Icon4 from '../assets/iconos/GIZ_CD-09.png';
import Icon5 from '../assets/iconos/GIZ_CD-10.png';
import Icon6 from '../assets/iconos/GIZ_CD-11.png';
import Icon7 from '../assets/iconos/GIZ_CD-12.png';
import Icon8 from '../assets/iconos/GIZ_CD-13.png';

import Logos from '../assets/logos/CINTILLO_GIZ.png';

import Banner from '../assets/slider/GIZ_CD-16.png';

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
  img?: string;
}

interface Slide {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface Organizaciones {
  image: string;
  title: string;
}

const slides: Slide[] = [
  {
    image: Slider,
    title: 'Fortaleciendo la Transparencia desde la Sociedad Civil',
    description: 'Conecta Datos es una comunidad regional que impulsa el uso de datos abiertos en Centroamérica para la participación ciudadana y la rendición de cuentas.',
    buttonText: 'Explora los Datos',
    buttonLink: '/datos-abiertos'
  },
  {
    image: Slider,
    title: 'Participa en Nuestra Comunidad',
    description: 'Únete a una red de organizaciones comprometidas con la transparencia y el uso efectivo de datos abiertos.',
    buttonText: 'Únete Ahora',
    buttonLink: '/participa'
  },
  {
    image: Slider,
    title: 'Capacítate en Datos Abiertos',
    description: 'Accede a talleres, recursos y herramientas para fortalecer tus habilidades en el uso de datos.',
    buttonText: 'Ver Talleres',
    buttonLink: '/talleres'
  }
];

const StatCard = ({ value, label, className, img }: StatCardProps) => (
  <div className={cn(
    'flex-1 bg-white p-6 rounded-lg shadow-md border-t-4 animate-on-scroll',
    className
  )}
    style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
  >
    <img src={img} width={80}/>
    <h3 className="text-3xl font-bold text-black my-2">{value}</h3>
    <p className="text-neutral-600 text-center">{label}</p>
  </div>
);

interface FeatureLinkProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
}

const FeatureLink = ({ title, description, icon, to }: FeatureLinkProps) => (
  <Link to={to} className="group">
    <Card className="h-full animate-on-scroll transition-all duration-300 group-hover:translate-y-[-5px]">
      <CardContent>
        <div className="mb-4  text-primary-500">
          {typeof icon === 'string' ? (
            <img src={icon} width={80} />
          ) : (
            icon
          )}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">{title}</h3>
        <p className="text-neutral-600">{description}</p>
        <div className="mt-4 flex items-center text-primary-500 font-medium group-hover:translate-x-1 transition-transform">
          Saber más <ArrowRight size={16} className="ml-1" />
        </div>
      </CardContent>
    </Card>
  </Link>
);

const ParticipatingOrg = ({ name, logo }: { name: string; logo: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-20 h-20 rounded-full bg-neutral-100 flex items-center justify-center mb-2">
      <img src={logo} alt={name} className="w-16 h-16 object-contain" />
    </div>
    <p className="text-sm text-center font-medium">{name}</p>
  </div>
);

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      {/* Hero Slider */}
      <div className="relative h-screen2">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              currentSlide === index ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="absolute inset-0 bg-black/20 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container-custom">
                <div className="max-w-3xl animate-on-scroll">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-white mb-8">
                    {slide.description}
                  </p>
                  <Link to={slide.buttonLink}>
                    <Button
                      variant="primary"
                      size="lg"
                      icon={slide.buttonLink === '/datos-abiertos' ? <Database size={20} /> : <Users size={20} />}
                    >
                      {slide.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <img src={SliderTop} style={{position:'absolute', bottom:-10, zIndex:'30'}}/>
        
        {/* Slider Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                currentSlide === index ? "bg-white" : "bg-white/50"
              )}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Project Summary */}
      <Section className='bg-white'>
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Acerca del Proyecto</h2>
          <p className="text-lg text-neutral-700 mb-4">
            Conecta Datos es una iniciativa regional que busca fortalecer las capacidades de las organizaciones de la sociedad civil (OSC) en Centroamérica para utilizar datos abiertos como herramienta de incidencia y monitoreo de políticas públicas.
          </p>
          <p className="text-lg text-neutral-700 mb-4">
            A través de formación técnica, asistencia especializada y la creación de una red colaborativa, promovemos la cultura de datos abiertos y la participación ciudadana para impulsar la transparencia y la rendición de cuentas en la región.
          </p>
          <p className="text-lg text-neutral-700">
            Este es un proyecto financiado por el Gobierno Federal
            de Alemania por medio de la Cooperación Alemana
            para el Desarrollo GIZ, junto a la Secretaría Ejecutiva
            del COSEFIN e implementado por Red Ciudadana.
            Juntos fomentamos el uso estratégico de los datos
            abiertos en Centroamérica porque los datos abiertos
            son un motor de innovación, crecimiento económico y
            desarrollo sostenible. Además, creemos en su
            capacidad para fortalecer la transparencia fiscal y
            mejorar la gestión pública.
          </p>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-neutral-100">
        <div className="flex flex-col md:flex-row gap-6">
          <StatCard value="3" label="Países" img={Icon1} />
          <StatCard value="6" label="OSC participantes" img={Icon2}  />
          <StatCard value="2" label="Foros regionales" img={Icon3}  />
          <StatCard value="1" label="Índice regional de datos abiertos"  img={Icon4}  />
        </div>
      </Section>

      {/* Featured Links */}
      <Section
        title="Nuestras áreas de trabajo"
        subtitle="Conoce los pilares que conforman nuestra estrategia para fortalecer el ecosistema de datos abiertos en Centroamérica."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <FeatureLink
            title="Datos Abiertos"
            description="Conoce qué son, cómo funcionan y por qué son importantes para la transparencia."
            icon={Icon5}
            to="/datos-abiertos"
          />
          <FeatureLink
            title="Medición Regional"
            description="Explora nuestro índice de evaluación de datos abiertos en Centroamérica."
            icon={Icon6}
            to="/medicion"
          />
          <FeatureLink
            title="Talleres"
            description="Accede a capacitaciones y recursos para fortalecer tus habilidades en datos."
            icon={Icon7}
            to="/talleres"
          />
          <FeatureLink
            title="Participa"
            description="Forma parte de nuestra comunidad regional y contribuye al ecosistema."
            icon={Icon8}
            to="/participa"
          />
        </div>
      </Section>

      {/* Participating Organizations */}
      <Section
        // title="Organizaciones participantes"
        // subtitle="Conoce las OSC que integran nuestra red de colaboración en Centroamérica"
        className="bg-white"
      >
        <div className="flex flex-wrap justify-center gap-10 mt-12 animate-on-scroll">
          <img src={Logos}/>
        </div>
      </Section>

      {/* Call to Action */}
      <Section 
        className="text-white text-center" 
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '100%',
          minHeight: '50vh'
        }}
      >
        <div className="max-w-3xl mx-auto animate-on-scroll my-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para ser parte del cambio?</h2>
          <p className="text-xl mb-8">
            Únete a nuestra comunidad y contribuye al fortalecimiento de la transparencia y la rendición de cuentas a través de los datos abiertos.
          </p>
          <Link to="/participa">
            <Button 
              size="lg"
              icon={<Users size={20} />}
              style={{backgroundColor: '#4d96cc'}}
            >
              Quiero participar
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Home;