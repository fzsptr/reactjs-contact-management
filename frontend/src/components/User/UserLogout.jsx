import { alertError } from "../../lib/alert";
import { useEffectOnce, useLocalStorage } from "react-use";
import { logoutApi } from "../../lib/api/logoutApi";
import { useNavigate } from "react-router";

export default function UserLogout() {

    const [token, setToken] = useLocalStorage("token", "")
    const navigate = useNavigate()

    async function handleLogout() {
        const response = await logoutApi(token)
        const responseBody = await response.json()
        console.log(responseBody);

        if (response.status === 200) {
            setToken("")
            navigate({
                pathname: '/login'
            });
        } else {
            await alertError(responseBody.errors)
        }
    }

    useEffectOnce(() => {
        handleLogout()
            .then(() => console.log("User logout successfully"))
    })

    return (
        <>
        
        </>
    )
}