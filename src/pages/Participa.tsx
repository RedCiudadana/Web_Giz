import { useState } from 'react';
import { Users, Send, ChevronDown, MessageSquare, ExternalLink } from 'lucide-react';
import Button from '../components/common/Button';
import Section from '../components/common/Section';
import Card, { CardContent } from '../components/common/Card';
import { cn } from '../utils/cn';
import ContactForm from '../components/common/ContactForm';
import Banner from '../assets/slider/GIZ_CD-16.png';
import Datos2 from '../assets/datos/GIZ_CD-02.png';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: '¿Quiénes pueden formar parte de la comunidad?',
    answer: 'Cualquier organización de la sociedad civil con interés en el uso de datos abiertos para transparencia, rendición de cuentas e incidencia puede formar parte de nuestra comunidad. Buscamos OSC comprometidas con el desarrollo democrático en Centroamérica.'
  },
  {
    question: '¿Qué beneficios obtengo al participar?',
    answer: 'Al formar parte de Conecta Datos, tu organización tendrá acceso a capacitaciones especializadas, asistencia técnica, recursos exclusivos, participación en eventos regionales, y la posibilidad de establecer alianzas con otras organizaciones y expertos en datos abiertos.'
  },
  {
    question: '¿Requiero conocimientos técnicos previos?',
    answer: 'No es necesario contar con conocimientos técnicos avanzados. Nuestro programa incluye capacitaciones desde nivel básico hasta avanzado, por lo que organizaciones con diferentes niveles de experiencia pueden participar y beneficiarse.'
  },
  {
    question: '¿Cuál es el nivel de compromiso esperado?',
    answer: 'Esperamos que las organizaciones participantes asistan a las capacitaciones programadas, implementen lo aprendido en proyectos propios, compartan sus experiencias con la comunidad y contribuyan activamente al fortalecimiento de la red regional de datos abiertos.'
  }
];

const FAQItem = ({ faq, isOpen, toggleOpen }: { faq: FAQ; isOpen: boolean; toggleOpen: () => void }) => (
  <div className="border-b border-neutral-200">
    <button
      className="w-full py-4 text-left flex justify-between items-center focus:outline-none"
      onClick={toggleOpen}
    >
      <h3 className="font-medium text-lg">{faq.question}</h3>
      <ChevronDown 
        size={20} 
        className={cn(
          "text-neutral-500 transition-transform duration-200",
          isOpen && "transform rotate-180"
        )} 
      />
    </button>
    <div 
      className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
      )}
    >
      <p className="text-neutral-700">{faq.answer}</p>
    </div>
  </div>
);

const Participa = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      {/* Header */}
      <Section
        className="text-white text-center"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          minHeight: "50vh",
        }}
      >
        <div className="max-w-3xl my-24 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">
            Participa
          </h1>
          <p className="text-xl mb-6 animate-on-scroll">
            Únete a nuestra comunidad y sé parte del cambio con datos abiertos
          </p>
        </div>
      </Section>

      {/* Open Call Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Convocatoria abierta para OSC</h2>
            <p className="text-lg text-neutral-700 mb-4">
              Buscamos organizaciones de la sociedad civil comprometidas con la transparencia y la rendición de cuentas que quieran fortalecer sus capacidades en el uso de datos abiertos.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 text-white flex items-center justify-center mt-1 mr-3">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Requisitos</h3>
                  <p className="text-neutral-600">Ser una OSC legalmente constituida en Guatemala, El Salvador u Honduras con interés en datos abiertos y transparencia.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 text-white flex items-center justify-center mt-1 mr-3">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Beneficios</h3>
                  <p className="text-neutral-600">Capacitación especializada, asistencia técnica, acceso a eventos regionales y conexión con una red de organizaciones similares.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 text-white flex items-center justify-center mt-1 mr-3">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Proceso de selección</h3>
                  <p className="text-neutral-600">Evaluación de la solicitud, entrevista virtual y firma de compromiso de participación.</p>
                </div>
              </div>
            </div>
            <Button 
              variant="primary" 
              size="lg"
              icon={<Users size={20} />}
            >
              Aplicar a la comunidad
            </Button>
          </div>
          <div className="animate-on-scroll">
            <img 
              src={Datos2}
              alt="Equipo de trabajo colaborando" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* Contact Form */}
      <Section 
        title="¿Tienes preguntas o comentarios?" 
        subtitle="Escríbenos directamente"
        className="bg-neutral-50"
      >
        <ContactForm />
      </Section>

      {/* FAQs */}
      <Section 
        title="Preguntas frecuentes" 
        subtitle="Respuestas a las consultas más comunes sobre participación en Conecta Datos"
      >
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openFAQ === index}
                toggleOpen={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* WhatsApp Group */}
      {/* <Section 
        className="bg-primary-500 text-white text-center"
      >
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Únete a nuestra comunidad en WhatsApp</h2>
          <p className="text-xl mb-8">
            Conecta directamente con otras organizaciones y comparte recursos, preguntas y experiencias en nuestro grupo de WhatsApp.
          </p>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-lg font-medium transition-all duration-200 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500"
          >
            <svg xmlns=" https://chat.whatsapp.com/FtmG1Qa6bc74cLyBIMPp8d " width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" /><path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" /><path d="M9.5 13.5c.5 1.5 2.5 2 4 1" /></svg>
            Unirse al grupo
          </a>
        </div>
      </Section> */}
    </>
  );
};

export default Participa;