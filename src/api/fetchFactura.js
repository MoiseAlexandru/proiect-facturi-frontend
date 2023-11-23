
export default async function fetchFactura(id) {
    try {
        const response = await fetch(`https://localhost:7203/api/Facturi/${id}`, {
            method: 'GET',
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