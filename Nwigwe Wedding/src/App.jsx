import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import './styles/index.css'

import Celebration from './Components/Celebration'
import Header from './Components/Header'
import Home from './Components/Home'
import RSVPPage from './Components/RSVPPage'
import ThingsToDo from './Components/ThingsToDo'
import TravelandLodging from './Components/TravelandLodging'
import WeddingParty from './Components/WeddingParty'
import WeekAhead from './Components/WeekAhead'
import Welcome from './Components/Welcome'
import Footer from './Components/Footer'
import RSVPForm from './Components/RSVPForm'



export default function App() {

  const [invited , setInvited] = useState()

  return (
    <div>
    <Header/>
    <Routes>
      <Route path= '/' element={<Home/>}/>
      <Route path= '/Welcome' element={<Welcome/>}/>
      <Route path= '/WeekAhead' element={<WeekAhead/>}/>
      <Route path= '/Celebration' element={<Celebration/>}/>
      <Route path= '/WeddingParty' element={<WeddingParty/>}/>
      <Route path= '/TravelandLodging' element={<TravelandLodging/>}/>
      <Route path= '/ThingsToDo' element={<ThingsToDo/>}/>
      <Route path= '/RSVPPage' element={<RSVPPage invited={invited} setInvited={setInvited}/> }/>
      <Route path= '/RSVPForm/' element={<RSVPForm invited={invited} setInvited={setInvited}/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}