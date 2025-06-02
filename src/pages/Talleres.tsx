import { useState } from 'react';
import { Calendar, Users, Filter, ExternalLink } from 'lucide-react';
import Button from '../components/common/Button';
import Section from '../components/common/Section';
import Card, { CardContent } from '../components/common/Card';
import { cn } from '../utils/cn';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  type: 'workshop' | 'webinar' | 'conference';
  status: 'upcoming' | 'past';
  description?: string;
  capacity?: number;
  duration?: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Taller: Introducción a los Datos Abiertos',
    date: '2025-06-15',
    location: 'Guatemala City, Guatemala',
    type: 'workshop',
    status: 'upcoming',
    description: 'Aprende los conceptos básicos de datos abiertos y su importancia para la transparencia gubernamental.',
    capacity: 30,
    duration: '4 horas'
  },
  {
    id: 2,
    title: 'Webinar: Herramientas de Visualización de Datos',
    date: '2025-07-10',
    location: 'Virtual',
    type: 'webinar',
    status: 'upcoming',
    description: 'Descubre las mejores herramientas y técnicas para crear visualizaciones efectivas.',
    capacity: 100,
    duration: '2 horas'
  },
  {
    id: 3,
    title: 'Foro Regional: Participación Ciudadana y Datos Abiertos',
    date: '2025-05-15',
    location: 'San Salvador, El Salvador',
    type: 'conference',
    status: 'past',
    description: 'Encuentro regional para compartir experiencias y mejores prácticas.',
    capacity: 150,
    duration: '8 horas'
  },
  {
    id: 4,
    title: 'Taller: Monitoreo del Gasto Público con Datos Abiertos',
    date: '2025-04-20',
    location: 'Tegucigalpa, Honduras',
    type: 'workshop',
    status: 'past',
    description: 'Metodologías y herramientas para el seguimiento presupuestario.',
    capacity: 25,
    duration: '6 horas'
  },
  {
    id: 5,
    title: 'Webinar: API y Extracción de Datos Gubernamentales',
    date: '2025-04-05',
    location: 'Virtual',
    type: 'webinar',
    status: 'past',
    description: 'Aprende a acceder y extraer datos de APIs gubernamentales.',
    capacity: 80,
    duration: '3 horas'
  }
];

const EventCard = ({ event }: { event: Event }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const date = new Date(event.date);
  const formattedDate = date.toLocaleDateString('es', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const getEventTypeIcon = () => {
    switch (event.type) {
      case 'workshop':
        return <Users size={16} />;
      case 'webinar':
        return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/></svg>;
      case 'conference':
        return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>;
      default:
        return <Calendar size={16} />;
    }
  };
  
  return (
    <Card className={cn(
      "animate-on-scroll transition-all duration-300",
      event.status === 'past' && "opacity-75",
      isExpanded && "transform scale-[1.02]"
    )}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center text-neutral-600 gap-4">
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-primary-600" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2 text-sm">
              {getEventTypeIcon()}
              <span className="capitalize">{event.type}</span>
            </span>
          </div>
          {event.status === 'upcoming' ? (
            <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
              Próximo
            </span>
          ) : (
            <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm font-medium rounded-full">
              Pasado
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <div className="text-neutral-600 mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          {event.location}
        </div>
        
        <div className={cn(
          "grid gap-4 transition-all duration-300",
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}>
          <div className="overflow-hidden">
            {event.description && <p className="text-neutral-600 mb-3">{event.description}</p>}
            <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
              {event.capacity && (
                <span className="flex items-center gap-1">
                  <Users size={14} />
                  {event.capacity} participantes
                </span>
              )}
              {event.duration && (
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {event.duration}
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 mt-4">
          {event.status === 'upcoming' ? (
            <Button variant="primary" size="sm">
              Inscribirse
            </Button>
          ) : (
            <Button variant="outline" size="sm">
              Ver recursos
            </Button>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-neutral-600 hover:text-primary-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn(
                "transition-transform duration-300",
                isExpanded ? "transform rotate-180" : ""
              )}
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

const Talleres = () => {
  const [eventFilter, setEventFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  
  const filteredEvents = events.filter(event => {
    if (eventFilter === 'all') return true;
    return event.status === eventFilter;
  });

  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">
              Talleres y Recursos
            </h1>
            <p className="text-xl mb-6 animate-on-scroll">
              Fortalece tus capacidades en el uso de datos abiertos con nuestros materiales y capacitaciones
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
              <Button 
                variant="secondary" 
                size="lg"
                icon={<Calendar size={20} />}
              >
                Ver calendario
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
                icon={<ExternalLink size={20} />}
              >
                Más información
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Events Calendar */}
      <Section 
        title="Calendario de eventos" 
        subtitle="Talleres, webinars y conferencias para fortalecer tus capacidades"
      >
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-on-scroll">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center">
              <Filter size={20} className="mr-2 text-neutral-500" />
              <span className="mr-3 text-neutral-700">Filtrar:</span>
            </div>
            <div className="flex bg-neutral-100 rounded-lg overflow-hidden">
              <button 
                onClick={() => setEventFilter('all')} 
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  eventFilter === 'all' 
                    ? "bg-primary-600 text-white" 
                    : "text-neutral-700 hover:bg-neutral-200"
                )}
              >
                Todos
              </button>
              <button 
                onClick={() => setEventFilter('upcoming')} 
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  eventFilter === 'upcoming' 
                    ? "bg-primary-600 text-white" 
                    : "text-neutral-700 hover:bg-neutral-200"
                )}
              >
                Próximos
              </button>
              <button 
                onClick={() => setEventFilter('past')} 
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  eventFilter === 'past' 
                    ? "bg-primary-600 text-white" 
                    : "text-neutral-700 hover:bg-neutral-200"
                )}
              >
                Pasados
              </button>
            </div>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            icon={<Calendar size={16} />}
          >
            Exportar calendario
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Talleres;