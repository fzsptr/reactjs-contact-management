const userLogin = async({username, password}) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/users/login`, {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    },
    body: JSON.stringify({
        username, 
        password
    }),
  })
}

export default userLogin;