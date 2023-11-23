import { useParams } from "react-router-dom"
import Factura from "./Factura";

export default function FacturaPage() {
    const {id} = useParams();
    return <Factura id = {id} />
}