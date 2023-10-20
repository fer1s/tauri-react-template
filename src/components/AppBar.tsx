import { appWindow } from '@tauri-apps/api/window'

import '../styles/components/AppBar.scss'

import { VscChromeMinimize, VscChromeMaximize, VscChromeClose } from 'react-icons/vsc'

const AppBar = () => {
   const handleMinimize = () => {
      appWindow.minimize()
   }

   const handleToggleMaximize = () => {
      appWindow.toggleMaximize()
   }

   const handleClose = () => {
      appWindow.close()
   }

   return (
      <div className="app_bar" data-tauri-drag-region>
         <div className="title">Tauri Template</div>

         <div className="window_buttons">
            <button onClick={handleMinimize}>
               <VscChromeMinimize />
            </button>
            <button onClick={handleToggleMaximize}>
               <VscChromeMaximize />
            </button>
            <button onClick={handleClose}>
               <VscChromeClose />
            </button>
         </div>
      </div>
   )
}

export default AppBar
