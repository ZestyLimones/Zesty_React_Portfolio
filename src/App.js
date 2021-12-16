import React from 'react';
import NaveBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <NaveBar />
    </Router>
  );
}
