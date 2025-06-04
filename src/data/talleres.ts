export interface TallerFrontmatter {
  title: string;
  fecha: string;
  tipo: "Workshop" | "Webinar" | "Conference";
  ubicacion: string;
  estado: "Próximo" | "Pasado";
  boton_texto: "Inscribirse" | "Ver recursos";
  link?: string;
}

export interface TallerData extends TallerFrontmatter {
  id: string;
}

function normalizeDate(dateStr: string): string {
  const parts = dateStr.split(" de ").map((s) => s.trim());
  if (parts.length === 3) {
    const [dayPart, monthPart, yearPart] = parts;
    const day = parseInt(dayPart, 10);
    const year = parseInt(yearPart, 10);

    const monthLower = monthPart.toLowerCase();

    const monthMap: Record<string, number> = {
      "enero": 1,
      "febrero": 2,
      "marzo": 3,
      "abril": 4,
      "mayo": 5,
      "junio": 6,
      "julio": 7,
      "agosto": 8,
      "septiembre": 9,
      "setiembre": 9,
      "octubre": 10,
      "noviembre": 11,
      "diciembre": 12,
      "january": 1,
      "february": 2,
      "march": 3,
      "april": 4,
      "may": 5,
      "june": 6,
      "july": 7,
      "august": 8,
      "september": 9,
      "october": 10,
      "november": 11,
      "december": 12,
    };

    const monthNumber = monthMap[monthLower];
    if (monthNumber && !isNaN(day) && !isNaN(year)) {

      const mm = String(monthNumber).padStart(2, "0");
      const dd = String(day).padStart(2, "0");
      return `${yearPart}-${mm}-${dd}`;
    }
  }

  return dateStr;
}

import matter from "gray-matter";

const modules = import.meta.glob("../content/talleres/*.md", { as: "raw" });

export const getTalleres = async (): Promise<TallerData[]> => {
  const entries: TallerData[] = [];

  for (const [path, load] of Object.entries(modules)) {
    const raw = await (load as () => Promise<string>)();
    const { data } = matter(raw);          // front-matter parseado

    const slug = path.split("/").pop()!.replace(".md", "");
    entries.push({
      id: slug,
      title: data.title ?? data.titulo,
      fecha: normalizeDate(data.fecha),
      tipo: data.tipo,
      ubicacion: data.ubicacion,
      estado: data.estado,
      boton_texto: data.boton_texto,
      link: data.link,
    });
  }

  return entries.sort(
    (a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
  );
};

