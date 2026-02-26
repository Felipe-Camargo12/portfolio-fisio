import React from 'react';
import Header from './components/elements/Header';
import AboutMe from './sections/AboutMe';
import Home from './sections/Home';
import Services from './sections/Services';
import GetInTouch from './sections/GetInTouch';
import Testimonials from './sections/Testimonials';
import TalkToMe from './sections/TalkToMe';
import Contacts from './sections/Contacts';
import Faq from './sections/Faq';
import Transition from './sections/Transition';
import Footer from './components/elements/Footer';

export default function App() {
  return (
    <div className="bg-off-white w-full min-h-screen overflow-x-hidden">
      <Header />
      <main className="w-full min-h-screen">
        <Home />
        <AboutMe />
        <Services />
        <GetInTouch />
        <Testimonials />
        <TalkToMe />
        <Faq />
        <Contacts />
        <Transition />
      </main>
      <Footer />
    </div>
  );
}