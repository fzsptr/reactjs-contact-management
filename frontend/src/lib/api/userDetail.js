export const userDetail = async (token) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/users/current`, {
        method: 'GET',
        headers: {
            'Accept': 'application.json',
            'Authorization': token
        }
    })
}