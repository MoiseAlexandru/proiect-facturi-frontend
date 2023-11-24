import { useState, useEffect } from "react";
import EntryFactura from "./EntryFactura";
import fetchListaFacturi from "../api/fetchListaFacturi";
import "../styles.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function ListaFacturi() {
    
    const [facturi, setFacturi] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(function () {

        async function getFacturi() {
            setIsLoading(true);
            const res = await fetchListaFacturi();
            const data = await res.json();
            console.log(data);
            setFacturi(data);
            setIsLoading(false);
        }
        getFacturi();
    }, [])

    console.log(facturi);

    return (
        <div>
            <p className = "titluPagina"> Lista Facturi </p>
            
            {isLoading?
                <p> Loading... </p>
                :
                <div className="containerFacturi">
                    <p className = "tabelHeader">
                        <span className="elementEntryFactura"> Numar Factura </span>
                        <span className="elementEntryFactura"> Nume Client </span>
                        <span className="elementEntryFactura"> Data Facturare </span>
                    </p>
                    <ul className="tabelBody">
                        {facturi.map((factura) => 
                            <li key = {factura.idFactura} onClick = {() => {navigate(`/factura/${factura.idFactura}`, {replace: true});}}>
                                <EntryFactura numarFactura = {factura.numarFactura} numeClient = {factura.numeClient} dataFacturare = {factura.dataFacturare} />
                            </li>
                        )}
                    </ul>
                    <div className = "buttonLine">
                        <Button variant="secondary" className="adaugareFacturaButton" onClick = {() => {navigate(`/factura/create`, {replace: true});}}> Adaugare factura </Button>
                    </div>
                </div>
            }
        </div>
    );
}