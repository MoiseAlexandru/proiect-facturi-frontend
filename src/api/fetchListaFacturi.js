

export default async function fetchListaFacturi() {
    try {
        const response = await fetch('https://localhost:7203/api/Facturi', {
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

