import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Account from './Pages/Account';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/:id" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
