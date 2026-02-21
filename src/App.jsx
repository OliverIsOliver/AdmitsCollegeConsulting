import './App.css'
import React from 'react';
import Homepage from './Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hire from './Hire';
import TallyFormEmbed from './TallyForm';
import { Analytics } from '@vercel/analytics/react';
import Learn from './Components/Learn';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            index 
            element={<Homepage />}
          />

        <Route 
            path="/hire"
            element={<Hire />}
          />

          <Route 
            path="/form"
            element={<TallyFormEmbed />}
          />

          <Route 
            path="/learn"
            element={<Learn />}
          />


          
        </Routes>

        

        
      </BrowserRouter>
      <Analytics />

    </>
  )
}

export default App
