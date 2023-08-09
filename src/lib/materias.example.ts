export const Materias: Record<string, any> = {
  materia: {
    tipo: "pasta",
    nome: "pasta1",
    pasta: [
      {
        tipo: "link",
        link: "/física/refração-da-luz/document.pdf",
        nome: "document.pdf",
      },
      {
        tipo: "pasta",
        nome: "pasta2",
        pasta: [
          {
            nome: "pasta",
            tipo: "pasta3",
            pasta: [
              {
                tipo: "link",
                link: "/física/refração-da-luz/document.pdf",
                nome: "document.pdf",
              },
            ],
          },
        ],
      },
    ],
    // ...
  },
};
