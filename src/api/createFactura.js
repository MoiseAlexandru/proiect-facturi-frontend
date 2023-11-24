
export default async function createFactura(factura) {
    try {
        const response = await fetch(`https://localhost:7203/api/Facturi`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idLocatie: factura.idLocatie,
                numarFactura: factura.numarFactura,
                dataFacturare: factura.dataFacturare,
                numeClient: factura.numeClient
            })
        });
        return response;
    }
    catch(error) {
        console.log(error);
        return null;
    }
}