import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Download, ExternalLink, Info, Users } from 'lucide-react';
import Button from '../components/common/Button';
import Section from '../components/common/Section';
import Card, { CardContent } from '../components/common/Card';
import { cn } from '../utils/cn';
import Banner from '../assets/slider/GIZ_CD-16.png';

interface CountryData {
  id: string;
  name: string;
  score: number;
  government: number;
  citizen: number;
  business: number;
  highlights: string[];
  recommendations: string[];
}

const countries: CountryData[] = [
  {
    id: 'gt',
    name: 'Guatemala',
    score: 65,
    government: 58,
    citizen: 71,
    business: 66,
    highlights: [
      'Alta disponibilidad de datos presupuestarios',
      'Buena calidad en datos de educación',
      'Avances significativos en formato de datos abiertos'
    ],
    recommendations: [
      'Mejorar la frecuencia de actualización de datos',
      'Implementar metadatos estandarizados',
      'Fortalecer la interoperabilidad entre plataformas'
    ]
  },
  {
    id: 'sv',
    name: 'El Salvador',
    score: 59,
    government: 62,
    citizen: 53,
    business: 62,
    highlights: [
      'Fortaleza en datos de contrataciones públicas',
      'Buena interfaz de acceso a datos gubernamentales',
      'Marco legal sólido para datos abiertos'
    ],
    recommendations: [
      'Aumentar la granularidad de los datos disponibles',
      'Mejorar la documentación y guías de uso',
      'Ampliar conjuntos de datos de interés ciudadano'
    ]
  },
  {
    id: 'hn',
    name: 'Honduras',
    score: 52,
    government: 48,
    citizen: 54,
    business: 54,
    highlights: [
      'Avances importantes en transparencia presupuestaria',
      'Mejora en la calidad de datos estadísticos',
      'Esfuerzos significativos en participación ciudadana'
    ],
    recommendations: [
      'Fortalecer el marco normativo de datos abiertos',
      'Mejorar la infraestructura tecnológica',
      'Desarrollar capacidades en instituciones públicas'
    ]
  }
];

const ScoreBar = ({ value, max = 100, label, color = 'bg-primary-500' }: { value: number; max?: number; label?: string; color?: string }) => (
  <div className="w-full">
    {label && <div className="flex justify-between mb-1">
      <span className="text-sm font-medium">{label}</span>
      <span className="text-sm font-medium">{value}%</span>
    </div>}
    <div className="w-full bg-neutral-200 rounded-full h-2.5">
      <div 
        className={`h-2.5 rounded-full ${color}`} 
        style={{ width: `${(value / max) * 100}%` }}
      ></div>
    </div>
  </div>
);

const DimensionCard = ({ title, description, icon, score }: { title: string; description: string; icon: React.ReactNode; score: number }) => (
  <Card className="h-full animate-on-scroll">
    <CardContent>
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary-50 text-primary-500">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-neutral-600 mb-4">{description}</p>
          <ScoreBar value={score} />
        </div>
      </div>
    </CardContent>
  </Card>
);

const Medicion = () => {
  const [activeCountry, setActiveCountry] = useState<string>('gt');
  const [activeTab, setActiveTab] = useState<'overview' | 'highlights' | 'recommendations'>('overview');
  
  const selectedCountry = countries.find(c => c.id === activeCountry) || countries[0];

  return (
    <>
      {/* Header */}
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
        <div className="max-w-3xl my-24 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">
            Medición Regional
          </h1>
          <p className="text-xl mb-6 animate-on-scroll">
            Índice Regional de Datos Abiertos en Centroamérica
          </p>
        </div>
      </Section>

      {/* Introduction */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Sobre el índice</h2>
            <p className="text-lg text-neutral-700 mb-4">
              El Índice Regional de Datos Abiertos es una herramienta de evaluación que mide el estado y avance de las iniciativas de datos abiertos en Guatemala, El Salvador y Honduras.
            </p>
            <p className="text-lg text-neutral-700 mb-4">
              A través de una metodología rigurosa, evaluamos tres dimensiones clave para comprender la calidad, disponibilidad y utilidad de los datos abiertos gubernamentales en la región centroamericana.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-neutral-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Metodología</h4>
                <p className="text-sm text-neutral-600">
                  Basada en estándares internacionales y adaptada al contexto regional.
                </p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Periodicidad</h4>
                <p className="text-sm text-neutral-600">
                  Evaluación anual con informes intermedios de seguimiento.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-on-scroll">
            <img 
              src="https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Investigadores analizando datos regionales" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* Dimensions */}
      <Section 
        title="Dimensiones evaluadas" 
        subtitle="Nuestro índice mide tres dimensiones fundamentales para comprender el ecosistema de datos abiertos"
        className="bg-neutral-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DimensionCard 
            title="Gobierno"
            description="Evalúa la disposición, calidad y accesibilidad de los datos publicados por entidades gubernamentales."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 7h.01" /><path d="M12 7h.01" /><path d="M17 7h.01" /><path d="M7 12h.01" /><path d="M12 12h.01" /><path d="M17 12h.01" /><path d="M7 17h.01" /><path d="M12 17h.01" /><path d="M17 17h.01" /></svg>}
            score={56}
          />
          <DimensionCard 
            title="Ciudadanía"
            description="Mide el nivel de participación, uso y aprovechamiento de los datos por parte de la sociedad civil."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>}
            score={59}
          />
          <DimensionCard 
            title="Sector Privado"
            description="Evalúa la utilización de datos abiertos para innovación, emprendimiento y desarrollo económico."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" /></svg>}
            score={61}
          />
        </div>
      </Section>

      {/* Interactive Map (Mockup) */}
      <Section 
        title="Mapa Regional" 
        subtitle="Explora el estado de los datos abiertos en Centroamérica"
      >
        <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {countries.map((country) => (
              <button
                key={country.id}
                onClick={() => setActiveCountry(country.id)}
                className={cn(
                  "p-4 rounded-lg transition-all text-left",
                  activeCountry === country.id
                    ? "bg-primary-500 text-white shadow-md transform scale-105"
                    : "bg-neutral-100 hover:bg-neutral-200"
                )}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">{country.name}</h3>
                  <span className={cn(
                    "text-sm px-2 py-1 rounded-full",
                    activeCountry === country.id
                      ? "bg-white text-primary-600"
                      : "bg-neutral-200"
                  )}>
                    {country.score}%
                  </span>
                </div>
                <ScoreBar 
                  value={country.score} 
                  color={activeCountry === country.id ? "bg-white" : "bg-primary-500"} 
                />
              </button>
            ))}
          </div>
          
          {/* Selected Country Details */}
          <div className="bg-neutral-50 p-6 rounded-lg animate-on-scroll">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h3 className="text-2xl font-bold">{selectedCountry.name}</h3>
              <div className="mt-2 sm:mt-0 flex items-center gap-2">
                <span className="text-sm text-neutral-500">Puntuación general:</span>
                <span className="font-bold text-2xl text-primary-500">{selectedCountry.score}%</span>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="border-b border-neutral-200 mb-6">
              <div className="flex flex-wrap -mb-px">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={cn(
                    "py-2 px-4 border-b-2 font-medium text-sm",
                    activeTab === 'overview'
                      ? "border-primary-500 text-primary-500"
                      : "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
                  )}
                >
                  Resumen
                </button>
                <button
                  onClick={() => setActiveTab('highlights')}
                  className={cn(
                    "py-2 px-4 border-b-2 font-medium text-sm",
                    activeTab === 'highlights'
                      ? "border-primary-500 text-primary-500"
                      : "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
                  )}
                >
                  Hallazgos
                </button>
                <button
                  onClick={() => setActiveTab('recommendations')}
                  className={cn(
                    "py-2 px-4 border-b-2 font-medium text-sm",
                    activeTab === 'recommendations'
                      ? "border-primary-500 text-primary-500"
                      : "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
                  )}
                >
                  Recomendaciones
                </button>
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="animate-fade-in">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-sm text-neutral-500 mb-2">Gobierno</h4>
                    <div className="flex items-end justify-between">
                      <span className="text-2xl font-bold">{selectedCountry.government}%</span>
                      <ScoreBar value={selectedCountry.government} className="w-2/3" />
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-sm text-neutral-500 mb-2">Ciudadanía</h4>
                    <div className="flex items-end justify-between">
                      <span className="text-2xl font-bold">{selectedCountry.citizen}%</span>
                      <ScoreBar value={selectedCountry.citizen} className="w-2/3" color="bg-secondary-500" />
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-sm text-neutral-500 mb-2">Sector Privado</h4>
                    <div className="flex items-end justify-between">
                      <span className="text-2xl font-bold">{selectedCountry.business}%</span>
                      <ScoreBar value={selectedCountry.business} className="w-2/3" color="bg-neutral-700" />
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'highlights' && (
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium mb-4">Hallazgos clave</h4>
                  <ul className="space-y-2">
                    {selectedCountry.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Info size={18} className="text-primary-500 mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === 'recommendations' && (
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium mb-4">Recomendaciones</h4>
                  <ul className="space-y-2">
                    {selectedCountry.recommendations.map((recommendation, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <ArrowDown size={18} className="text-secondary-500 mt-0.5 shrink-0" />
                        <span>{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Downloads */}
      <Section 
        title="Descargas" 
        subtitle="Accede a informes completos y conjuntos de datos"
        className="bg-neutral-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll">
          <a 
            href="#" 
            className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="bg-primary-50 p-3 rounded-lg mr-4">
              <Download size={24} className="text-primary-500" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Informe Regional Completo (PDF)</h3>
              <p className="text-neutral-600">Análisis completo con metodología y hallazgos detallados</p>
            </div>
          </a>
          <a 
            href="#" 
            className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="bg-secondary-50 p-3 rounded-lg mr-4">
              <Download size={24} className="text-secondary-500" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Conjunto de Datos (CSV/Excel)</h3>
              <p className="text-neutral-600">Datos completos para realizar tus propios análisis</p>
            </div>
          </a>
        </div>
      </Section>

      {/* Methodology */}
      <Section 
        title="Metodología" 
        subtitle="Conoce el proceso de evaluación y los criterios utilizados"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 animate-on-scroll">
          <div className="lg:col-span-3">
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold mb-4">Marco de evaluación</h3>
                <p className="text-neutral-700 mb-4">
                  Nuestro índice utiliza una metodología rigurosa adaptada al contexto centroamericano, basada en estándares internacionales como el Open Data Barometer y el Global Open Data Index, pero con ajustes específicos para nuestra región.
                </p>
                <p className="text-neutral-700 mb-4">
                  Evaluamos conjuntos de datos clave en diversas categorías temáticas, considerando aspectos como:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 mr-2 bg-primary-500 rounded-full"></span>
                    <span>Disponibilidad y accesibilidad de los datos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 mr-2 bg-primary-500 rounded-full"></span>
                    <span>Calidad y formato de los conjuntos de datos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 mr-2 bg-primary-500 rounded-full"></span>
                    <span>Marco legal y políticas de datos abiertos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 mr-2 bg-primary-500 rounded-full"></span>
                    <span>Uso e impacto de los datos en diversos sectores</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2">
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold mb-4">Categorías evaluadas</h3>
                <ul className="space-y-3">
                  <li className="pb-3 border-b border-neutral-100">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Presupuestos</span>
                      <span className="text-sm bg-primary-100 text-primary-700 px-2 rounded-full">Alta prioridad</span>
                    </div>
                    <p className="text-sm text-neutral-600">Información sobre presupuestos nacionales, ejecución y gastos por sector</p>
                  </li>
                  <li className="pb-3 border-b border-neutral-100">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Contrataciones</span>
                      <span className="text-sm bg-primary-100 text-primary-700 px-2 rounded-full">Alta prioridad</span>
                    </div>
                    <p className="text-sm text-neutral-600">Datos sobre procesos de contratación pública, licitaciones y adjudicaciones</p>
                  </li>
                  <li className="pb-3 border-b border-neutral-100">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Educación</span>
                      <span className="text-sm bg-neutral-100 text-neutral-700 px-2 rounded-full">Media prioridad</span>
                    </div>
                    <p className="text-sm text-neutral-600">Estadísticas educativas, rendimiento escolar e infraestructura</p>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Salud</span>
                      <span className="text-sm bg-neutral-100 text-neutral-700 px-2 rounded-full">Media prioridad</span>
                    </div>
                    <p className="text-sm text-neutral-600">Indicadores de salud, cobertura de servicios y estadísticas sanitarias</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contribuye a mejorar los datos abiertos</h2>
          <p className="text-xl mb-8">
            Únete al esfuerzo regional para fortalecer el ecosistema de datos abiertos en Centroamérica.
          </p>
          <Link to="/participa">
            <Button 
              size="lg"
              icon={<Users size={20} />}
              style={{border: '1px solid #fff'}}
            >
               Únete a la red
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Medicion;