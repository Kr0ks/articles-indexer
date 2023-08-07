import { Materias } from "$lib/materias.js";
import { Separator } from "$lib/separator.js";
import { error } from "@sveltejs/kit";

export const load = ({ params }) => {
  const slug = params.slug;
  const split = slug.split(Separator);
  if (Materias[split[0]][split[1]] === undefined) {
    throw error(404, "Materia inexistente");
  }
  return { materia: split[0], titulo: split[1] };
};
