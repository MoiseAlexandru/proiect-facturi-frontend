

export default async function editDetaliiFactura(id, detaliiFactura) {
    try {

        const response = await fetch(`https://localhost:7203/api/detaliiFacturi/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                numeProdus: detaliiFactura.numeProdus,
                cantitate: detaliiFactura.cantitate,
                pretUnitar: detaliiFactura.pretUnitar
            })
        });
        return response;
    }
    catch(error) {
        console.log(error);
        return null;
    }
}