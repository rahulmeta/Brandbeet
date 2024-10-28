import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';
import Page5 from './Components/Page5';
import Page6 from './Components/Page6';
import Footer from './Components/Footer';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='main'>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Footer />
    </div>
  )
}

export default App
