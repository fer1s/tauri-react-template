import { useState } from 'react'
import { invoke } from '@tauri-apps/api/tauri'

import reactLogo from './assets/react.svg'
import tauriLogo from './assets/tauri.svg'

import './styles/container.scss'

function App() {
   const [greetMsg, setGreetMsg] = useState('')
   const [name, setName] = useState('')

   async function greet() {
      if (!name) return
      setGreetMsg(await invoke('greet', { name }))
   }

   return (
      <div className="container">
         <h1>Welcome to Tauri!</h1>

         <div className="row">
            <a href="https://tauri.app" target="_blank">
               <img src={tauriLogo} className="logo tauri" alt="Tauri logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
         </div>

         <p>Click on the Tauri, and React logos to learn more.</p>
         <p>
            Template made by{' '}
            <a href="https://fer1s.github.io" target="_blank">
               fer1s
            </a>
         </p>

         <form
            className="row"
            onSubmit={(e) => {
               e.preventDefault()
               greet()
            }}
         >
            <input id="greet-input" onChange={(e) => setName(e.currentTarget.value)} placeholder="Enter a name..." />
            <button type="submit">Greet</button>
         </form>

         <p className="greeted">{greetMsg}</p>
      </div>
   )
}

export default App
