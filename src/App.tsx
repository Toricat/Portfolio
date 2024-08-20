// import React from 'react'

import { Route, Routes } from "react-router-dom"
import Home from "@/app/Home"
import "@/styles/index.css"
import "@/components/navbar/navbar"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
