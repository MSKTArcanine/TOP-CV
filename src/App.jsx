import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'

export default function App() {
  
  return(<>
    <header>
      <GeneralInfo />
    </header>
    
    <main>
      <h2> Education </h2>
      <hr />
      <Education/>
    </main>
    </>
  )
}