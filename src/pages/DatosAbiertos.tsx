import { Link } from 'react-router-dom';
import { Download, ExternalLink, Check } from 'lucide-react';
import Button from '../components/common/Button';
import Section from '../components/common/Section';
import Card, { CardContent, CardHeader, CardFooter } from '../components/common/Card';
import Banner from '../assets/slider/GIZ_CD-16.png';
import Datos1 from '../assets/datos/GIZ_CD-01.png';
import Pdf1 from '../assets/pdf/manual-02_que-son-datos-abiertos-1-.pdf'
import Pdf2 from '../assets/pdf/manual-01-1-.pdf'

const PrincipleCard = ({ number, title, description }: { number: number; title: string; description: string }) => (
  <Card className="animate-on-scroll">
    <CardHeader className="bg-primary-500 text-white">
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-primary-400 font-bold">
          {number}
        </span>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-neutral-700">{description}</p>
    </CardContent>
  </Card>
);

const ResourceCard = ({ title, description, link }: { title: string; description: string; link: string }) => (
  <Card className="h-full animate-on-scroll">
    <CardContent>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
    </CardContent>
    <CardFooter className="bg-neutral-50">
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
      >
        <Download size={18} className="mr-2" /> Descargar recurso
      </a>
    </CardFooter>
  </Card>
);

const SuccessCase = ({ title, country, impact, image }: { title: string; country: string; impact: string; image: string }) => (
  <Card className="animate-on-scroll">
    <div className="h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <CardContent>
      <div className="inline-block px-3 py-1 mb-3 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-full">
        {country}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-neutral-600">{impact}</p>
    </CardContent>
  </Card>
);

const OpenDataPortal = ({ name, country, url }: { name: string; country: string; url: string }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow animate-on-scroll"
  >
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-bold">{name}</h3>
        <p className="text-neutral-600 text-sm">{country}</p>
      </div>
      <ExternalLink size={18} className="text-primary-500" />
    </div>
  </a>
);

const DatosAbiertos = () => {
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
            Datos Abiertos
          </h1>
          <p className="text-xl mb-6 animate-on-scroll">
            Información accesible, utilizable y transformadora para el desarrollo
          </p>
        </div>
      </Section>

      {/* Introduction */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6">¿Qué son los datos abiertos?</h2>
            <p className="text-lg text-neutral-700 mb-4">
              Los datos abiertos son información que puede ser utilizada, reutilizada y redistribuida libremente por cualquier persona, y que se encuentra sujeta, cuando mucho, al requerimiento de atribución y de compartirse de la misma manera en que aparecen.
            </p>
            <p className="text-lg text-neutral-700 mb-4">
              Las características principales de los datos abiertos incluyen:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check size={20} className="mt-1 mr-2 shrink-0" style={{color:'#4d96cc'}} />
                <span>Disponibilidad y acceso: deben estar disponibles como un todo y a un costo razonable.</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mt-1 mr-2 shrink-0" style={{color:'#4d96cc'}}/>
                <span>Reutilización y redistribución: deben ser provistos bajo términos que permitan reutilizarlos y redistribuirlos.</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="mt-1 mr-2 shrink-0" style={{color:'#4d96cc'}}/>
                <span>Participación universal: todos deben poder utilizar, reutilizar y redistribuir la información.</span>
              </li>
            </ul>
          </div>
          <div className="animate-on-scroll">
            <img 
              src={Datos1}
              alt="Datos abiertos en acción" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* Principles */}
      <Section 
        title="Principios de la Carta Internacional de Datos Abiertos" 
        subtitle="Los datos abiertos se rigen por estos principios fundamentales que garantizan su valor público"
        className="bg-neutral-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PrincipleCard 
            number={1} 
            title="Abiertos por defecto"
            description="Los datos públicos deben ser abiertos por defecto, con excepciones claras para la seguridad y privacidad."
          />
          <PrincipleCard 
            number={2} 
            title="Oportunos y completos"
            description="Los datos deben ser publicados tan pronto como sean recolectados, en su forma original y con el mayor detalle posible."
          />
          <PrincipleCard 
            number={3} 
            title="Accesibles y utilizables"
            description="Los datos deben estar disponibles para el mayor número de usuarios posible y para la más amplia gama de propósitos."
          />
          <PrincipleCard 
            number={4} 
            title="Comparables e interoperables"
            description="Los datos deben ser fácilmente comparables dentro y entre sectores, ubicaciones geográficas y a través del tiempo."
          />
          <PrincipleCard 
            number={5} 
            title="Para mejorar la gobernanza"
            description="Los datos abiertos fortalecen la rendición de cuentas y mejoran la toma de decisiones públicas."
          />
          <PrincipleCard 
            number={6} 
            title="Para el desarrollo inclusivo"
            description="Los datos abiertos pueden empoderar a todos, no solo a quienes cuentan con los recursos para acceder a ellos."
          />
        </div>
      </Section>

      {/* Resources */}
      <Section 
        title="Recursos y materiales" 
        subtitle="Descarga guías, manuales y herramientas para utilizar datos abiertos en tu organización"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResourceCard 
            title="Manual de Datos Abiertos"
            description="Guía completa con los conceptos, beneficios y pasos para implementar iniciativas de datos abiertos en tu organización."
            link={Pdf1}
          />
          <ResourceCard 
            title="Guía para OSC"
            description="Documento especializado para que organizaciones de la sociedad civil aprovechen los datos abiertos en sus actividades de incidencia."
            link={Pdf2}
          />
          <ResourceCard 
            title="Kit de herramientas"
            description="Conjunto de recursos prácticos, plantillas y consejos para trabajar con datos abiertos en proyectos reales."
            link="https://datosabiertos.redciudadana.org/transformacion/"
          />
        </div>
      </Section>

      {/* Success Cases */}
      {/* <Section 
        title="Casos de éxito" 
        subtitle="Conoce cómo los datos abiertos están generando impacto en Centroamérica"
        className="bg-neutral-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SuccessCase 
            title="Monitoreo del gasto público en educación"
            country="Guatemala"
            impact="Incremento de 15% en la asignación presupuestaria para escuelas rurales tras análisis de datos abiertos."
            image="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <SuccessCase 
            title="Transparencia en contrataciones públicas"
            country="Guatemala"
            impact="Reducción de irregularidades en licitaciones mediante el análisis de datos de contrataciones gubernamentales."
            image="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <SuccessCase 
            title="Calidad del servicio de agua potable"
            country="Guatemala"
            impact="Mejora en el acceso al agua en comunidades vulnerables gracias al mapeo de datos de cobertura."
            image="https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="text-center mt-12 animate-on-scroll">
          <Link to="/participa">
            <Button 
              icon={<ExternalLink size={18}
              style={{backgroundColor: '#4d96cc'}} />}
            >
              Comparte tu caso de éxito
            </Button>
          </Link>
        </div>
      </Section> */}

      {/* Open Data Portals */}
      {/* <Section 
        title="Portales de datos abiertos" 
        subtitle="Accede a las fuentes oficiales de datos abiertos en la región"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <OpenDataPortal 
            name="Portal de Datos Abiertos"
            country="Guatemala"
            url="https://datos.gob.gt/"
          />
          <OpenDataPortal 
            name="Portal de Datos Abiertos"
            country="El Salvador"
            url="https://datos.gob.sv/"
          />
          <OpenDataPortal 
            name="Portal de Transparencia"
            country="Honduras"
            url="https://portalunico.iaip.gob.hn/"
          />
          <OpenDataPortal 
            name="Instituto Nacional de Estadística"
            country="Guatemala"
            url="https://www.ine.gob.gt/"
          />
        </div>
      </Section> */}

      {/* Key Indicators */}
      {/* <Section 
        title="Indicadores clave para monitoreo" 
        subtitle="Parámetros esenciales para evaluar la calidad y uso de los datos abiertos"
        className="bg-neutral-50"
      >
        <div className="overflow-x-auto animate-on-scroll">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-primary-500 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Indicador</th>
                <th className="py-3 px-4 text-left">Descripción</th>
                <th className="py-3 px-4 text-left">Medición</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4 font-medium">Disponibilidad</td>
                <td className="py-3 px-4">Cantidad de conjuntos de datos publicados</td>
                <td className="py-3 px-4">Número total</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Actualidad</td>
                <td className="py-3 px-4">Frecuencia de actualización de los datos</td>
                <td className="py-3 px-4">Días/meses desde última actualización</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Accesibilidad</td>
                <td className="py-3 px-4">Facilidad para encontrar y usar los datos</td>
                <td className="py-3 px-4">Escala 1-5</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Formato</td>
                <td className="py-3 px-4">Formatos en que se publican los datos</td>
                <td className="py-3 px-4">% en formatos abiertos</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Reutilización</td>
                <td className="py-3 px-4">Proyectos que utilizan los datos disponibles</td>
                <td className="py-3 px-4">Número de aplicaciones/análisis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section> */}

      {/* Call to Action */}
      {/* <Section className="bg-primary-500 text-white text-center">
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comienza tu proyecto con datos abiertos</h2>
          <p className="text-xl mb-8">
            Explora, analiza y genera impacto con los recursos y la comunidad de Conecta Datos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/talleres">
              <Button 
                variant="secondary"
                icon={<Download size={18} />}
              >
                Accede a capacitaciones
              </Button>
            </Link>
            <Link to="/medicion">
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:bg-opacity-10"
                icon={<ExternalLink size={18} />}
              >
                Ver medición regional
              </Button>
            </Link>
          </div>
        </div>
      </Section> */}
    </>
  );
};

export default DatosAbiertos;