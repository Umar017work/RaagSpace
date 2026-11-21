import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PitchProvider } from './context/PitchContext';
import HomePage from './pages/HomePage';
import RaagPracticeStudioPage from './pages/RaagPracticeStudioPage';

export default function App() {
  return (
    <PitchProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Dynamic studio route for all 10 raags */}
          <Route path="/raag/:id" element={<RaagPracticeStudioPage />} />
          {/* Fallback to homepage */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </PitchProvider>
  );
}
