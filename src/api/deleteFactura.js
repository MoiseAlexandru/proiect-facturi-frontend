

export default async function deleteFactura(id) {
    try {
        const response = await fetch(`https://localhost:7203/api/Facturi/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    catch(error) {
        console.log(error);
        return null;
    }
}