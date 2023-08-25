import React from 'react'
import Header from './components/Header'
import GiftForm from './components/GiftForm'
import Footer from './components/Footer'
import { Power3, gsap } from 'gsap'

const App = () => {

  const t1 = new gsap.timeline();
  const ease = Power3.easeOut;

  return (
    <>
    <Header timeline={t1} ease={ease} />
    <GiftForm timeline={t1} ease={ease} />
    <Footer timeline={t1} ease={ease}/>
    </>
  )
}

export default App


