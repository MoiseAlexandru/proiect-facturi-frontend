//import logo from './logo.svg';
//import './App.css';

import Factura from "./components/Factura";
import FacturaPage from "./components/FacturaPage";
import ListaFacturi from "./components/ListaFacturi";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
            <Route path = "/" element = {<ListaFacturi />} />
            <Route path = "/factura/:id" element = {<FacturaPage />} />
        </Routes>
    </Router>
  );
}

export default App;
