import {useCallback, useState, useEffect} from "react";

const storageName = 'propetUserToken';

export const useAuth = () => {
    // console.log('Logged started')

    const [token, setToken] = useState(null);
    const [logged, setLogged] = useState(false);
    const [userId, setUserId] = useState(null);

    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken);
        setUserId(id);

        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken
        }))

    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        localStorage.removeItem(storageName);

    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));
        if (data && data.token) {
            login(data.token, data.userId)
        }
        setLogged(true);
        // console.log('Logged finished')
    }, [login]);

    return { login, logout, token, userId, logged }
}
