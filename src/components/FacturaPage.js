import { useParams } from "react-router-dom"
import FacturaDetaliata from "./FacturaDetaliata";

export default function FacturaPage() {
    const {id} = useParams();
    return <FacturaDetaliata id = {id} />
}