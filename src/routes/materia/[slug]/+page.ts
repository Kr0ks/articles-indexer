import { Materias } from "$lib/materias.js";
import { error } from "@sveltejs/kit";

export const load = ({ params }) => {
  const slug = params.slug;
  if (Materias[slug] === undefined) {
    throw error(404, {code: 404, message: "Materia inexistente"});
  }
  return { slug: params.slug };
};
