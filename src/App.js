import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import VendingMachine from './VendingMachine';
import Oreos from './Oreos';
import Sprite from './Sprite';
import PopTart from './Poptart';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/snack/sprite" element={<Sprite />} />
          <Route path="/snack/oreos" element={<Oreos />} />
          <Route path="/snack/poptart" element={<PopTart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
