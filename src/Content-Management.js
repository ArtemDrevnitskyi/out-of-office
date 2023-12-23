import Bubble from "./components/Bubble";
import Contact from "./components/Contact";

export const welcomePages = [
  {
    element: <Bubble thoughtContent={'Hi! Thanks for reaching out.'} />,
    imgPath: '/assets/images/man_1.png'
  },
  {
    element: <Bubble thoughtContent={`I'm currenlty on vacation until 1/15.\nPlease use the options below to direct your inquiry.`} />,
    imgPath: '/assets/images/man_1_sunglass.png'
  },
  {
    element: <Contact />
  }
];

export const contactButtonTitles = [
  {
    title: 'Sales',
    path: '/sales'
  },
  {
    title: 'Operations',
    path: '/operations'
  },
  {
    title: 'Me...',
    path: '/me'
  }
];