import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Practical from './components/Practical'

export default function App() {
  
  return(<>
    <header>
      <GeneralInfo />
    </header>
    
    <main>
      <section id="education">
      <h2> Education </h2>
      <hr />
      <Education/>
      </section>
      <section id="practical">
        <h2>Practical</h2>
        <hr />
        <Practical />
      </section>
    </main>
    </>
  )
}