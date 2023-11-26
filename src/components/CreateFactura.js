
import { useState } from "react";
import createFactura from "../api/createFactura";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';


export default function CreateFactura() {

    const [idLocatie, setIdLocatie] = useState(0);
    const [numarFactura, setNumarFactura] = useState(0);
    const [dataFacturare, setDataFacturare] = useState(Date.now());
    const [numeClient, setNumeClient] = useState("");
    const [hasError, setHasError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();
    async function handleSubmit() {
        setIsSubmitting(true);
        const factura = {idLocatie: idLocatie, numarFactura: numarFactura, dataFacturare: dataFacturare, numeClient: numeClient};
        const res = await createFactura(factura);
        if(!res.ok)
            setHasError(true);
        else
        {
            const facturaId = await res.json();
            navigate(`/factura/${facturaId}`, {replace: true});
        }
        setIsSubmitting(false);
    }

    return (
        <div className = "createFacturaContainer">
            <p className = "titluPagina"> Adauga o factura </p>
            <Form className = "createFacturaForm">
                <Row className = "mb-3">
                    <Form.Group as = {Col} controlId = "formGridNumarFactura">
                        <Form.Label> Numar Factura </Form.Label>
                        <Form.Control value = {numarFactura} onChange = {(e) => {setNumarFactura(e.target.value)}} required />
                    </Form.Group>
                    <Form.Group as = {Col} controlId = "formGridNumeClient">
                        <Form.Label> Nume Client </Form.Label>
                        <Form.Control value = {numeClient} onChange = {(e) => {setNumeClient(e.target.value)}} required />
                    </Form.Group>
                </Row>
                <Row className = "mb-3">
                    <Form.Group as = {Col} controlId = "formGridIdLocatie">
                        <Form.Label> Id Locatie </Form.Label>
                        <Form.Control type = "number" value = {idLocatie} placeholder = "ex. 10212" onChange = {(e) => {setIdLocatie(Number(e.target.value))}} required />
                    </Form.Group>
                    <Form.Group as = {Col} controlId = "formGridDataFacturare">
                        <Form.Label> Data Facturare </Form.Label>
                        <Form.Control type = "date" onChange = {(e) => {setDataFacturare(e.target.value)}} required />
                    </Form.Group>
                </Row>
                {!isSubmitting && <Button variant = "success" onClick = {handleSubmit}> Adauga </Button>}
            </Form>
            {hasError && <p className = "textError"> Invalid fields, try again </p>}
        </div>
    );
}