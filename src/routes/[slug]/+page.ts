import { Iterate } from "$lib/iterate.js";
import { Materias } from "$lib/materias.js";

export const load = ({ params }) => {
  const slug = params.slug;

  return Iterate(Materias, slug, 0);
};
