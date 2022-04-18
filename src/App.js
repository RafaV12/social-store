import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Account from './Pages/Account';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account/:id" element={<Account />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
