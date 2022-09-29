import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Event from './pages/Event'
import './App.css'
import CreatePage from './pages/CreatePage'

function App() {
  const [eventInfo, setEventInfo] = useState({
    name: '',
    eventName: '',
    startDate: '',
    endDate: '',
    streetName: '',
  })

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route
          exact
          path='/event'
          element={<Event eventInfo={eventInfo} setEventInfo={setEventInfo} />}
        ></Route>
        <Route
          exact
          path='/create'
          element={
            <CreatePage eventInfo={eventInfo} setEventInfo={setEventInfo} />
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default App
