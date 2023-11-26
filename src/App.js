//import logo from './logo.svg';
//import './App.css';

import CreateFactura from "./components/CreateFactura";
import FacturaPage from "./components/FacturaPage";
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
                </Routes>
            </>
        </Router>
    );
}

export default App;
