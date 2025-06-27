import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SignUp from './SignUp';
import SignIn from './SignIn';
import LondonSystem from './LondonSystem';
import CaroKannSystem from './CaroKannSystem/CaroKannSystem';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/london-system" element={<LondonSystem />} />
        <Route path="/caro-kann" element={<CaroKannSystem />} />
      </Routes>
    </BrowserRouter>
  );
}
