import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScrollIndicator from './component/scroll-indicator/index'
import TabTest from './component/tabs.jsx/tab-text'

function App() {

  return (
    <div className='App'>
     <ScrollIndicator url={'https://dummyjson.com/products/?limit=100'} />

     {/* <TabTest /> */}
    </div>
  )
}

export default App
