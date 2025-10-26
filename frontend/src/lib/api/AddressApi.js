export const addressCreate = async (token, id, {street, city, province, country, postal_code}) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${id}/addresses`, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : token
        },
        body: JSON.stringify({
            street,
            city,
            province,
            country,
            postal_code
        })  
    } )
}