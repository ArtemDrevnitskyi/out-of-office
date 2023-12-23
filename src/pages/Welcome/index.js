import { Animator, ScrollContainer, ScrollPage, batch, Sticky, Fade } from 'react-scroll-motion';

import { welcomePages } from '../../Content-Management';
import PageLayout from '../../layouts/PageLayout';
import './styles.css';

const Welcome = () => <ScrollContainer className='scroll-container'>
  {welcomePages.map((page, id) => (
    <ScrollPage className='scroll-page' key={id}>
      <Animator className='scroll-animator' animation={batch(Fade(), Sticky())}>
        <PageLayout key={id} person={page.imgPath}>
          {page.element}
        </PageLayout>
      </Animator>
    </ScrollPage>))}
</ScrollContainer>;

export default Welcome;