import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import EventOne from './components/eventOne'
import FamiliesPage from './components/FamiliesPage'
import CountdownPage from './components/CountdownPage'
import EventsPage from './components/EventsPage'
import Timeline from './components/Timeline'
import Venue from './components/Venue'
import Memories from './components/Memories'
import WeddingFooter from './components/Footer'
import RSVPSection from './components/RSVP_Form'
import MusicPlayer from './components/MusicPlayer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EventOne/>
    <FamiliesPage/>
    <CountdownPage/>
    <EventsPage/>
    <Timeline/>
    <Venue/>
    <Memories/>
    <RSVPSection/>
    <WeddingFooter/>
    <MusicPlayer/>
    </>
  )
}

export default App
