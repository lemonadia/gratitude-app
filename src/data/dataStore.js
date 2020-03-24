export const settings = {
  columnCreatorText: "Add new column",
  cardCreatorText: "Add new card",
  creator: {
    buttonOK: "OK",
    buttonCancel: "Cancel",
    defaultText: "Add new item",
  },
  defaultListDescription: "<p>I can do all the things!!!</p>",
  defaultColumnIcon: "list-alt",
  search: {
    defaultText: "Find your card!",
  },
};

export const pageContents = {
  title: "The secret of happiess",
  subtitle: "What made you smile today?",
};

export const listData = {
  title: "I am <sup>grateful</sup> for",
  description: "Simple things that make me happy",
  image: "http://uploads.kodilla.com/bootcamp/fer/11.react/space.png",
  columns: [
    {
      key: 0,
      title: "Elusive moment",
      icon: "book",
      cards: [
        {
          key: 0,
          title: "Having an eye conact with a passing doggo",
        },
        {
          key: 1,
          title: "Meeting friend from highschool in the swimmingpool",
        },
      ],
    },
    {
      key: 1,
      title: "Appealing emotion",
      icon: "film",
      cards: [
        {
          key: 0,
          title: "Feeling of the weekend",
        },
        {
          key: 1,
          title: "Chilly rain splitting into my arm",
        },
      ],
    },
    {
      key: 2,
      title: "Beautiful soul",
      icon: "gamepad",
      cards: [
        {
          key: 0,
          title: "My mum",
        },
        {
          key: 1,
          title: "and dad",
        },
      ],
    },
  ],
};
const lists = [
  {
    id: "list-1",
    title: "Things to do <sup>soon!</sup>",
  },
];

const columns = [
  {
    id: "column-1",
    listId: "list-1",
    title: "Elusive moment",
  },
  {
    id: "column-2",
    listId: "list-1",
    title: "Appealing emotion",
  },
  {
    id: "column-3",
    listId: "list-1",
    title: "Beautiful soul",
  },
  {
    id: "column-4",
    listId: "list-2",
    title: "Strange column",
  },
];

const cards = [
  {
    id: "card-1",
    columnId: "column-1",
    title: "Having an eye conact with a passing doggo",
  },
  {
    id: "card-2",
    columnId: "column-1",
    title: "Meeting friend from highschool in the swimmingpool",
  },
  {
    id: "card-3",
    columnId: "column-2",
    title: "Feeling of the weekend",
  },
  {
    id: "card-4",
    columnId: "column-2",
    title: "Chilly rain splitting into my arm",
  },
  {
    id: "card-5",
    columnId: "column-3",
    title: "My mum",
  },
  {
    id: "card-6",
    columnId: "column-3",
    title: "and dad",
  },
];

const initialStoreData = {
  app: { ...pageContents },
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
