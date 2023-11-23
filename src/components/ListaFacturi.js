import { useState, useEffect } from "react";
import EntryFactura from "./EntryFactura";
import fetchListaFacturi from "../api/fetchListaFacturi";
import "../styles.css";
import Button from "react-bootstrap/Button";

export default function ListaFacturi() {
    
    const [facturi, setFacturi] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
                            <li key = {factura.numarFactura}>
                                <EntryFactura numarFactura = {factura.numarFactura} numeClient = {factura.numeClient} dataFacturare = {factura.dataFacturare} />
                            </li>
                        )}
                    </ul>
                    <div className = "buttonLine">
                        <Button variant="secondary" className="adaugareFacturaButton"> Adaugare factura </Button>
                    </div>
                </div>
            }
        </div>
    );
}