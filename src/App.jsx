import { useState } from 'react'
import Header from './components/Header'
import FirstPage from './components/FirstPage'
import OurServices from './components/OurServices'
import Cards from './components/Cards'
import OurDocuments from './components/OurDocuments'
import Customersatisfaction from './components/Customersatisfaction'
import Workingspace from './components/Workingspace'
import SomeofOurGreatCustomers from './components/SomeofOurGreatCustomers'
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
    </>
  )
}

export default App
