import { useEffect, useState } from "react";
import { Calendar, Users, Filter, ExternalLink } from "lucide-react";
import Button from "../components/common/Button";
import Section from "../components/common/Section";
import Card, { CardContent } from "../components/common/Card";
import { cn } from "../utils/cn";
import Banner from "../assets/slider/GIZ_CD-16.png";

import { getTalleres } from "../data/talleres";

// Definimos la interfaz local Event que usará tu UI
interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: "workshop" | "webinar" | "conference";
  status: "upcoming" | "past";
  buttonText: "Inscribirse" | "Ver recursos";
  link?: string;
}

// Helpers para normalizar al formato que usa la UI:
const normalizeType = (tipo: string): Event["type"] => {
  switch (tipo) {
    case "Workshop":
      return "workshop";
    case "Webinar":
      return "webinar";
    case "Conference":
      return "conference";
    default:
      return "workshop";
  }
};

const normalizeStatus = (estado: string): Event["status"] => {
  return estado === "Próximo" ? "upcoming" : "past";
};

const EventCard = ({ event }: { event: Event }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Formatear la fecha para mostrar “14 de junio de 2025”
  const dateObj = new Date(event.date);
  const formattedDate = dateObj.toLocaleDateString("es", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getEventTypeIcon = () => {
    switch (event.type) {
      case "workshop":
        return <Users size={16} />;
      case "webinar":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 7l-7 5 7 5V7z" />
            <rect width="15" height="14" x="1" y="5" rx="2" ry="2" />
          </svg>
        );
      case "conference":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
            <line x1="6" x2="6" y1="2" y2="4" />
            <line x1="10" x2="10" y1="2" y2="4" />
            <line x1="14" x2="14" y1="2" y2="4" />
          </svg>
        );
      default:
        return <Calendar size={16} />;
    }
  };

  return (
    <Card
      className={cn(
        "animate-on-scroll transition-all duration-300",
        event.status === "past" && "opacity-75",
        isExpanded && "transform scale-[1.02]"
      )}
    >
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center text-neutral-600 gap-4">
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-primary-700" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2 text-sm">
              {getEventTypeIcon()}
              <span className="capitalize">{event.type}</span>
            </span>
          </div>
          {event.status === "upcoming" ? (
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
          {/* Ícono de ubicación */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {event.location}
        </div>

        {/* Bloque expandible (si en el futuro deseas incluir más detalles) */}
        <div
          className={cn(
            "grid gap-4 transition-all duration-300",
            isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            {/* Aquí podrías renderizar descripción, capacidad, duración, etc. */}
          </div>
        </div>

        {/* <div className="flex items-center gap-3 mt-4">
          {event.link ? (
            <a
              href={event.link}
              target={event.status === "upcoming" ? "_blank" : "_self"}
              rel="noreferrer"
            >
              <Button
                variant={event.status === "upcoming" ? "primary" : "outline"}
                size="sm"
              >
                {event.buttonText}
              </Button>
            </a>
          ) : (
            <Button variant="outline" size="sm" disabled>
              {event.buttonText}
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
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div> */}
      </CardContent>
    </Card>
  );
};

const TalleresPage = () => {
  const [eventFilter, setEventFilter] = useState<"all" | "upcoming" | "past">(
    "all"
  );
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Al montar el componente, llamamos a getTalleres() y mapeamos a nuestro tipo Event
    getTalleres().then((talleresMD) => {
      const mapped: Event[] = talleresMD.map((taller) => ({
        id: taller.id,
        title: taller.title,
        date: taller.fecha, // "YYYY-MM-DD" ya normalizada desde data/talleres.ts
        location: taller.ubicacion,
        type: normalizeType(taller.tipo),
        status: normalizeStatus(taller.estado),
        buttonText: taller.boton_texto,
        link: taller.link,
      }));
      setEvents(mapped);
    });
  }, []);

  // Filtramos según el estado
  const filteredEvents = events.filter((event) => {
    if (eventFilter === "all") return true;
    return event.status === eventFilter;
  });

  return (
    <>
      {/* === HEADER PRINCIPAL === */}
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
            Talleres y Recursos
          </h1>
          <p className="text-xl mb-6 animate-on-scroll">
            Fortalece tus capacidades en el uso de datos abiertos con nuestros
            materiales y capacitaciones
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
            <Button size="lg" icon={<Calendar size={20} />}>
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
      </Section>

      {/* === FILTROS Y CALENDARIO === */}
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
                onClick={() => setEventFilter("all")}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  eventFilter === "all"
                    ? "bg-primary-700 text-white"
                    : "text-neutral-700 hover:bg-neutral-200"
                )}
              >
                Todos
              </button>
              <button
                onClick={() => setEventFilter("upcoming")}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  eventFilter === "upcoming"
                    ? "bg-primary-700 text-white"
                    : "text-neutral-700 hover:bg-neutral-200"
                )}
              >
                Próximos
              </button>
              <button
                onClick={() => setEventFilter("past")}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  eventFilter === "past"
                    ? "bg-primary-700 text-white"
                    : "text-neutral-700 hover:bg-neutral-200"
                )}
              >
                Pasados
              </button>
            </div>
          </div>
          <Button variant="outline" size="sm" icon={<Calendar size={16} />}>
            Exportar calendario
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default TalleresPage;