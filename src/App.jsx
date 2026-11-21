import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PitchProvider } from './context/PitchContext';
import HomePage from './pages/HomePage';
import YamanPracticePage from './pages/YamanPracticePage';

export default function App() {
  return (
    <PitchProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/raag/yaman" element={<YamanPracticePage />} />
          {/* Fallback to homepage */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </PitchProvider>
  );
}
