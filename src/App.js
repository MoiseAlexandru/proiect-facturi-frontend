//import logo from './logo.svg';
//import './App.css';

import CreateFactura from "./components/CreateFactura";
import FacturaDetaliata from "./components/FacturaDetaliata";
import FacturaPage from "./components/FacturaPage";
import DetaliiFacturaPage from "./components/DetaliiFacturaPage";
import ListaFacturi from "./components/ListaFacturi";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Button, Navbar } from "react-bootstrap";

function App() {
    return (
        <Router>
            <>
                <a href = "/"> <img src = "./backarrow.png" className="backButton"/> </a>
                <Routes>
                    <Route path = "/" element = {<ListaFacturi />} />
                    <Route path = "/factura/:id" element = {<FacturaPage />} />
                    <Route path = "/factura/create" element = {<CreateFactura />} />
                    <Route path = "/detaliifactura/:id" element = {<DetaliiFacturaPage />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;
