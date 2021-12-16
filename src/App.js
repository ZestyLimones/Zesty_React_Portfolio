import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NaveMenu from './components/NavMenu';

export default function App() {
  return (
    <Router>
      <NaveMenu />
    </Router>
  );
}
