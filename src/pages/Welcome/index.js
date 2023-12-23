import { Animator, ScrollContainer, ScrollPage, batch, Sticky, Fade } from 'react-scroll-motion';

import Bubble from '../../components/Bubble';
import Contact from '../../components/Contact';
import PageLayout from '../../layouts/PageLayout';
import './styles.css';

const welcomePages = [
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

const Welcome = () => <ScrollContainer className='scroll-container'>
  {welcomePages.map((page, id) => (
    <ScrollPage className='scroll-page' data={id} key={id}>
      <Animator className='scroll-animator' animation={batch(Fade(), Sticky())}>
        <PageLayout key={id} person={page.imgPath}>
          {page.element}
        </PageLayout>
      </Animator>
    </ScrollPage>))}
</ScrollContainer>;

export default Welcome;