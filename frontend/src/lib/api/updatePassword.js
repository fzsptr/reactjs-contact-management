const userUpdatePassword = async(token, {password}) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/users/current`, {
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : token
        },
        body: JSON.stringify({
            password
        })
    })
}

export default userUpdatePassword;