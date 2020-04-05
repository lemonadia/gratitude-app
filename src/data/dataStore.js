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
  title: "An Antidote to Dissatisfaction",
  subtitle: "What made you smile today?",
};

export const infoContents = {
  title: "Why gratitude?",
  content:
    "An antidote against dissatisfaction so to speak: Gratitude. Research shows that adopting an attitude of gratitude, simply expressing appreciation and being thankful, can measurably improve your overall well-being. It can increase happiness, reduce depression. Feeling dissatisfied with your job, relations escalates in the times of social media and comparing to each other. How we can counteract these impulses?<br> By writing down moments, emotions, situation that you can be grateful for, you can practice this posture and be happy! ",
};
export const faqContents = {
  title: "Frequently Asked Questions",
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
    title: "Mon<sup>day</sup>",
  },
  {
    id: "list-2",
    title: "Tues <sup>day</sup>",
  },
  {
    id: "list-3",
    title: "Wednes<sup>day</sup>",
  },
  {
    id: "list-4",
    title: "Thurs <sup>day</sup>",
  },
  {
    id: "list-5",
    title: "Fri <sup>day</sup>",
  },
  {
    id: "list-6",
    title: "Satur <sup>day</sup>",
  },
  {
    id: "list-7",
    title: "Sun <sup>day</sup>",
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
