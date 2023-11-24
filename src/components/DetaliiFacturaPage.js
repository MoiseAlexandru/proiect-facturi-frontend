
import { useParams } from "react-router-dom"
import DetaliiFactura from "./DetaliiFactura";

export default function DetaliiFacturaPage() {
    const {id} = useParams();
    return <DetaliiFactura id = {id} />
} 

