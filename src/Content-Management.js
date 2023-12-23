import Bubble from "./components/Bubble";
import Contact from "./components/GoContact";

export const welcomePages = [
  {
    element: <Bubble thoughtContent={'Hi! Thanks for reaching out.'} />,
    imgPath: '/assets/images/person_main.png'
  },
  {
    element: <Bubble thoughtContent={`I'm currenlty on vacation until 1/15.\nPlease use the options below to direct your inquiry.`} />,
    imgPath: '/assets/images/person_main_sunglass.png'
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

export const contactData = {
  sales: {
    title: 'Sales',
    summary: `Meet Brian Moore, our VP of Sales, who proudly claims the 'Brian #1'
    position at Turnkey.\nBrian will be your go-to person for all things salesrelated.`,
    email: 'Bmoore@goturnkey.com',
    phone: '(800) 690-4310',
    person: '/assets/images/person_sales.png'
  },
  operations: {
    title: 'Operations',
    summary: `Meet Paul Barash, our VP of Ops, the driving force behind seamless efficiency and excellent. If you need anything Paul's your guy.`,
    email: 'Paul@goturnkey.com',
    phoen: '(800) 690-4310',
    person: '/assets/images/person_operations.png'
  }
}