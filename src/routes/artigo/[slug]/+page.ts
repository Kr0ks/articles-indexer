import { Materias } from "$lib/materias.js";
import { Separator } from "$lib/separator.js";
import { error } from "@sveltejs/kit";


export const load = ({ params }) => {
  const slug = params.slug;
  const split = slug.split(Separator);
  if (Materias[split[0]] === undefined || Materias[split[0]][split[1]] === undefined) {
    throw error(404, 
      {
        code: 404, message: "Artigo inexistente"
      } as unknown as ErrorResponse
);
  }
  return { materia: split[0], titulo: split[1] };
};
