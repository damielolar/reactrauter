import DescriptionPage from './components/moviedecript'
import React from'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import HomePage from './components/homepage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/description/:id" element={<DescriptionPage />}/>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
