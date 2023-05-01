export const RESSURSOVERSIKT_MOCK: Ressursoversikt = {
  periods: [
    {
      entries: [
        {
          user: {
            id: 1,
            name: "Kjetil",
          },
          status: "project",
          project: {
            name: "Vadis",
          },
        },
        {
          user: {
            id: 2,
            name: "Andre",
          },
          status: "project",
          project: {
            name: "Transport tillatelser",
          },
        },
        {
          user: {
            id: 1,
            name: "Thao",
          },
          status: "project",
          project: {
            name: "Politiet",
          },
        },
      ],
      week: "Uke 1",
    },
    {
      entries: [
        {
          user: {
            id: 1,
            name: "Kjetil",
          },
          status: "project",
          project: {
            name: "Vadis",
            customer: "SVV",
          },
        },
        {
          user: {
            id: 2,
            name: "Andre",
          },
          status: "project",
          project: {
            name: "Transport tillatelser",
            customer: "SVV",
          },
        },
        {
          user: {
            id: 1,
            name: "Thao",
          },
          status: "project",
          project: {
            name: "Politiet",
          },
        },
      ],
      week: "Uke 2",
    },
    {
      entries: [
        {
          user: {
            id: 1,
            name: "Kjetil",
          },
          status: "project",
          project: {
            name: "Vadis",
            customer: "SVV",
          },
        },
        {
          user: {
            id: 2,
            name: "Andre",
          },
          status: "project",
          project: {
            name: "Transport tillatelser",
            customer: "SVV",
          },
        },
        {
          user: {
            id: 1,
            name: "Thao",
          },
          status: "available",
        },
      ],
      week: "Uke 3",
    },
  ],
};
