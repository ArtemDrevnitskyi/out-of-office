import { Animator, ScrollContainer, ScrollPage, batch, Sticky, Fade } from "react-scroll-motion";
import Greeting from '../Greeting';
import Intro from '../Intro';
import Contact from '../Contact';
import Person from '../../components/Person';
import PageLayout from '../../layouts/PageLayout';
import './styles.css';

const welcomePages = [
  {
    element: <Greeting />,
    imgPath: '/assets/images/man_1.png'
  },
  {
    element: <Intro />,
    imgPath: '/assets/images/man_1_sunglass.png'
  },
  {
    element: <Contact />,
    imgPath: null
  }
]

const Welcome = () => {

  return (
    <ScrollContainer className='scroll-container'>
      {welcomePages.map((page, id) => (
        <ScrollPage className='scroll-page' data={id} key={id}>
          <Animator className='scroll-animator' animation={batch(Fade(), Sticky())}>
            <PageLayout key={id}>
              {page.element}
              {page.imgPath && <Person photo={page.imgPath} />}
            </PageLayout>
          </Animator>
        </ScrollPage>))}
      {/* <ScrollPage className='scroll-page' page={0}>
        <Animator className='scroll-animator' animation={batch(Fade(), Sticky())}>
          <Greeting />
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={batch(Sticky(), Fade())}>
          <Intro />
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={batch(Fade(), Sticky())}>
          <Contact />
        </Animator>
      </ScrollPage> */}
    </ScrollContainer>
  );
};

export default Welcome;