import React from 'react';
import NaveMenu from './components/NavMenu';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <NaveMenu />
    </Router>
  );
}
