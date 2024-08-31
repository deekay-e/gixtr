import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.scss'
import { AppRouter } from './routes'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App
