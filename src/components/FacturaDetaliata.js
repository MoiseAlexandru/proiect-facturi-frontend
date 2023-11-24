import { useEffect, useState } from "react";
import fetchFactura from "../api/fetchFactura";
import fetchDetaliiFactura from "../api/fetchDetaliiFactura";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import editFactura from "../api/editFactura";
import editDetaliiFactura from "../api/editDetaliiFactura";
import deleteFactura from "../api/deleteFactura";

export default function Factura({id}) {
    
    const [isLoading, setIsLoading] = useState(false);

    // formular Factura
    const [idFactura ,setIdFactura] = useState(0);
    const [idLocatie, setIdLocatie] = useState(0);
    const [numeClient, setNumeClient] = useState(0);
    const [dataFacturare, setDataFacturare] = useState(null);
    const [numarFactura, setNumarFactura] = useState(0);

    // formular DetaliiFactura
    const [idDetaliiFactura, setIdDetaliiFactura] = useState(0);
    const [numeProdus, setNumeProdus] = useState("");
    const [cantitate, setCantitate] = useState(0);
    const [pretUnitar, setPretUnitar] = useState(0);
    const total = cantitate * pretUnitar;


    const [isSubmitting, setIsSubmitting] = useState(false);
    const [facturaHasError, setFacturaHasError] = useState(false);
    const [detaliiFacturaHasError, setDetaliiFacturaHasError] = useState(false);

    const navigate = useNavigate();

    // Fetch la Factura
    useEffect(function () {
        async function getFactura() {
            setIsLoading(true);
            const res = await fetchFactura(id);
            const data = await res.json();
            setIdFactura(data.idFactura);
            setNumeClient(data.numeClient);
            setDataFacturare(data.dataFacturare);
            setNumarFactura(data.numarFactura);
            setIdLocatie(data.idLocatie);
            setIsLoading(false);
        }
        getFactura();
    }, [id]);

    // Fetch la DetaliiFactura
    useEffect(function () {
        async function getDetaliiFactura() {
            setIsLoading(true);
            const res = await fetchDetaliiFactura(id);
            const data = await res.json();
            setIdDetaliiFactura(data.idDetaliiFactura);
            setNumeProdus(data.numeProdus);
            setCantitate(data.cantitate);
            setPretUnitar(data.pretUnitar);
            setIdLocatie(data.idLocatie);
            setIsLoading(false);
        }
        getDetaliiFactura();
    }, [id]);


    async function handleFacturaSubmit() {
        setIsSubmitting(true);
        const factura = {idLocatie: idLocatie, numarFactura: numarFactura, dataFacturare: dataFacturare, numeClient: numeClient};
        
        const res = await editFactura(id, factura);
        if(!res.ok)
            setFacturaHasError(true);
        else
            setFacturaHasError(false);
        /*
        else
        {
            const detaliiFacturaId = await res.json();
            navigate(`/detaliifactura/${detaliiFacturaId}`, {replace: true});
        }
        */
        setIsSubmitting(false);
    }

    async function handleFacturaDelete() {
        setIsSubmitting(true);
        await deleteFactura(idFactura);
        navigate(`/`, {replace: true});
        setIsSubmitting(false);
    }

    async function handleDetaliiFacturaSubmit() {
        setIsSubmitting(true);
        const detaliiFactura = {idFactura: id, idLocatie: idLocatie, numeProdus: numeProdus, cantitate: cantitate, pretUnitar: pretUnitar};
        const res = await editDetaliiFactura(idDetaliiFactura, detaliiFactura);
        if(!res.ok)
            setDetaliiFacturaHasError(true);
        else
            setFacturaHasError(false);
        setIsSubmitting(false);
    }

    return (
        <div className="facturaDetaliataContainer">
            <div className = "editFacturaContainer">
                <p className = "titluPagina"> Factura #{numarFactura} </p>
                <Form className = "editFacturaForm">

                    <Row className = "mb-3">
                        <Form.Group as = {Col} controlId = "formGridNumarFactura">
                            <Form.Label> Id Factura </Form.Label>
                            <Form.Control disabled value = {idFactura} />
                        </Form.Group>
                        <Form.Group as = {Col} controlId = "formGridNumeClient">
                            <Form.Label> Nume Client </Form.Label>
                            <Form.Control value = {numeClient} onChange = {(e) => {setNumeClient(e.target.value)}} required />
                        </Form.Group>
                    </Row>

                    <Row className = "mb-3">
                        <Form.Group as = {Col} controlId = "formGridIdLocatie">
                            <Form.Label> IdLocatie </Form.Label>
                            <Form.Control disabled type = "number" value = {idLocatie} />
                        </Form.Group>
                        <Form.Group as = {Col} controlId = "formGridDataFacturare">
                            <Form.Label> Data Facturare </Form.Label>
                            <Form.Control
                                value={dataFacturare ? new Date(dataFacturare).toISOString().split('T')[0] : ''}
                                type = "date"
                                onChange = {(e) => {setDataFacturare(new Date(e.target.value))}}
                            />
                        </Form.Group>
                    </Row>

                    {!isSubmitting &&
                        <div className = "containerButoane">
                            <Button variant = "success" className = "button-left" onClick = {handleFacturaSubmit}> Salveaza modificari </Button>
                            <Button variant = "danger" className = "button-right" onClick = {handleFacturaDelete}> Sterge factura </Button>
                        </div>
                    }
                </Form>
                {facturaHasError && <p className = "textError"> Invalid fields, try again </p>}
            </div>


            <div className = "editDetaliiFacturaContainer">
                <p className = "titluPagina"> Detalii factura </p>
                <Form className = "editDetaliiFacturaForm">

                    <Row className = "mb-3">
                        <Form.Group as = {Col} controlId = "formGridIdDetaliiFactura">
                            <Form.Label> IdDetaliiFactura </Form.Label>
                            <Form.Control disabled value = {idDetaliiFactura} />
                        </Form.Group>
                        <Form.Group as = {Col} controlId = "formGridIdLocatie2">
                            <Form.Label> IdLocatie </Form.Label>
                            <Form.Control disabled value = {idLocatie} />
                        </Form.Group>
                    </Row>

                    <Row className = "mb-3">
                        <Form.Group as = {Col} controlId = "formGridNumeProdus">
                            <Form.Label> Nume produs </Form.Label>
                            <Form.Control value = {numeProdus} onChange = {(e) => {setNumeProdus(e.target.value)}} />
                        </Form.Group>
                        <Form.Group as = {Col} controlId = "formGridCantitate">
                            <Form.Label> Cantitate </Form.Label>
                            <Form.Control value = {cantitate} onChange = {(e) => {setCantitate(Number(e.target.value))}} />
                        </Form.Group>
                        <Form.Group as = {Col} controlId = "formGridPretUnitar">
                            <Form.Label> Pret unitar </Form.Label>
                            <Form.Control value = {pretUnitar} onChange = {(e) => {setPretUnitar(Number(e.target.value))}} />
                        </Form.Group>
                    </Row>
                    
                    <Row className = "mb-3">
                        <Form.Group as = {Col} controlId = "formGridValoare">
                            <Form.Label> Total </Form.Label>
                            <Form.Control disabled value = {total} />
                        </Form.Group>
                    </Row>

                    {!isSubmitting && <Button variant = "success" onClick = {handleDetaliiFacturaSubmit}> Salveaza modificari </Button>}
                </Form>
                {detaliiFacturaHasError && <p className = "textError"> Invalid fields, try again </p>}
            </div>
        </div>
    );
}