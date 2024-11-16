import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CertificateSelection from './components/CertificateSelection';
import ContactForm from './components/ContactForm';
import Payement from './components/Payement';

function App() {
    return (
      <Router>
          <Routes>
              <Route path='/' exact element={<CertificateSelection />} />
              <Route path="/contact/:id" element={<ContactForm />} />
              <Route path='/payment/:id' element={<Payement />} />
          </Routes>
      </Router>
  );
}

export default App;
