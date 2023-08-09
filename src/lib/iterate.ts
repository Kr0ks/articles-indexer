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
    // Verificar se estamos em nested folders
    if (start <= 0) {
      p = p[split[i]];
    }

    // Esse i+1 !== 0 é importante pois difere do loop abaixo deste
    if (i + 1 !== split.length && Array.isArray(p)) {
      for (let o = 0; o < p.length; o++) {
        const a = p[o];
        if (a["tipo"] === "pasta" && split[i + 1] === a["nome"]) {
          return Iterate(a["pasta"], path, i + 1);
        }
      }
    }

    // Renderizar os componentes
    if (i + 1 === split.length) {
      const a = Object.entries(p);
      for (let o = 0; o < a.length; o++) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const b: any = a[o][1];
        const n: string = b["nome"];
        let link = b["link"];
        if (b["tipo"] === "pasta") {
          link = `${path}${Separator}${n}`;
        }
        resultados.push({ nome: n, link: link });
      }
    }
  }

  return { titulo: toUpperCaseFirst(split[0]), links: resultados };
};
