

export default async function editFactura(id, factura) {
    try {
        console.log(factura);
        console.log(id);
        const response = await fetch(`https://localhost:7203/api/Facturi/${id}`, {
            method: 'PUT',
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