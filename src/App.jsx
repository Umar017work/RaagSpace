import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PitchProvider } from './context/PitchContext';
import HomePage from './pages/HomePage';
import RaagPracticeStudioPage from './pages/RaagPracticeStudioPage';
import AlankarStudioPage from './pages/AlankarStudioPage';

export default function App() {
  return (
    <PitchProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Dynamic studio route for all raags (including Yaman & Bhupali) */}
          <Route path="/raag/:id" element={<RaagPracticeStudioPage />} />
          {/* Dedicated Alankar & Riyaz Academy routes */}
          <Route path="/riyaz" element={<AlankarStudioPage />} />
          <Route path="/alankars" element={<AlankarStudioPage />} />
          {/* Fallback to homepage */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </PitchProvider>
  );
}
