import { Separator } from "./separator";
import { toUpperCaseFirst } from "./toUpperCaseFirst";

export const Iterate = (
  obj: any,
  path: string,
  start: number
): { titulo: string; links: Array<{ nome: string; link: string }> } => {
  const split = path.split(Separator);
  let p = obj;
  const resultados: Array<{ nome: string; link: string }> = [];
  for (let i = start; i < split.length; i++) {
    const ultimo = i + 1 == split.length;

    // Verificar se estamos em nested folders
    if (start <= 0) {
      p = p[split[i]];
    }

    // Esse i+1 !== 0 é importante pois difere do loop abaixo deste
    if (!ultimo && Array.isArray(p)) {
      for (let o = 0; o < p.length; o++) {
        const a = p[o];
        if (a["tipo"] === "pasta" && split[i + 1] === a["nome"]) {
          return Iterate(a["pasta"], path, i + 1);
        }
      }
    }

    // Renderizar os componentes
    if (ultimo) {
      Object.entries(p).map((v: any) => {
        v = v[1];
        const n: string = v["nome"];
        resultados.push({
          nome: n,
          link: v["tipo"] === "pasta" ? `${path}${Separator}${n}` : v["link"],
        });
      });
    }
  }

  return { titulo: toUpperCaseFirst(split[0]), links: resultados };
};
