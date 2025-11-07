import { useState } from 'react'
import Header from './components/Header'
import FirstPage from './components/FirstPage'
import OurServices from './components/OurServices'
import Cards from './components/Cards'
import OurDocuments from './components/OurDocuments'
import Customersatisfaction from './components/Customersatisfaction'
import Workingspace from './components/Workingspace'
import SomeofOurGreatCustomers from './components/SomeofOurGreatCustomers'
import Lider from './components/Lider'
import FrequentlyAskQuestion from './components/FrequentlyAskQuestion'
import Testimonials from './components/Testimonials'
import StartaNewProject from './components/StartaNewProject'
import Subscribe from './components/Subscribe'
import Mapp from './components/Mapp'
import Last from './components/Last'

import './index.css'
function App() {

  return (
    <>
      <Header/>
      <FirstPage/>
      <OurServices/>
      <Cards/>
      <OurDocuments/>
      <Customersatisfaction/>
      <Workingspace/>
      <SomeofOurGreatCustomers/>
      <Lider/>
      <FrequentlyAskQuestion/>
      <Testimonials/>
      <StartaNewProject/>
      <Subscribe/>
      <Mapp/>
      <Last/>
    </>
  )
}

export default App
