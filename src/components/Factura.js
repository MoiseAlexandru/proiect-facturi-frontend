import { useEffect, useState } from "react";
import fetchFactura from "../api/fetchFactura";

export default function Factura({id}) {
    
    const [factura, setFactura] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(function () {
        async function getFactura() {
            setIsLoading(true);
            const res = await fetchFactura(id);
            const data = await res.json();
            setFactura(data);
            setIsLoading(false);
        }
        getFactura();
    }, []);

    return (
        <div>
            <p className = "TitluPagina"> Detalii factura #{factura.numarFactura} </p>
            {JSON.stringify(factura)} 
        </div>
    );
}