export const logoutApi = async (token) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/users/logout`, {
        method: 'DELETE',
        headers: {
            'Accept' : 'application/json',
            'Authorization' : token
        }
    })
}