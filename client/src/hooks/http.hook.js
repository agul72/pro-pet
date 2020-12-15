import {useCallback, useState} from "react";

export const useHttp = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (type, url, method = "GET",
                                           data = null,
                                           headers = {}) => {
        setLoading(true);
        let body;
        try {
            if (type === 'json' && data) {
                body = await JSON.stringify(data);
                headers["Content-Type"] = 'application/json';
            }

            if (type === 'photo') {
                body = new FormData();
                body.append('file', data);
                body.append('upload_preset', 'propet_users');
            }

            const response = await fetch(url, {
                method,
                body,
                headers
            });

            setLoading(false);

            if (!response.ok) {
                throw new Error(data.message || "Something wrong")
            }

            return await response.json();

        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, []);

    const clearError = useCallback(() => setError(null), []);

    return { loading, request: request, error, clearError }
}
