import { useState } from 'react'
import './App.css'

function App() {

  
  return (
    <>
      <div>
        
      <form className='cadastro' >
         <label htmlFor="nomeDeUser">  </label>
         <input type="text" placeholder='Digite seu nome'/>
         <input type="text" placeholder='Seu sobrenome'/>
         <input type="date" placeholder='ano de nascimento'/>
         <input type="text" placeholder='CPF'/>
         <label htmlFor="fotoDeUser"></label>
         <input type="file"  name='foto' accept='image/*'/>
      </form>
        
      </div>
    </>
  )
}

export default App
