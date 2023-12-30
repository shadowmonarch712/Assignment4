import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from './Components/LoginPage';
import Dashboard from './Components/Dashboard';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
  )
}

export default App