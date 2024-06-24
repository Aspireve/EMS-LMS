type Error = {
    message:   string;
    statusCode: string;
}

const customFetch = async (url: string, options: RequestInit): Promise<Response> => {
    const access_tokens = localStorage.getItem("access_token");
    const headers = options.headers as Record<string, string>;

    return await fetch(url, {
        ...options,
        headers: {
            ...headers,
            Authorization: headers?.Authorization || `Bearer ${access_tokens}`,
            "Content-Type": "application/json",
            "Apollo-Require-Preflight": "true"
        }
    })
}

export const fetchWrapper = async (url: string, options: RequestInit = {}): Promise<Response> => {
    const response = await customFetch(url, options);
    console.log(response)
    if(!response.ok) {
        const error = await getRestErrors(response)
        throw error
    }
    return response
}

const getRestErrors = async (response: Response): Promise<Error>=> {
    const body = await response.json();
    const message = body?.message || response.statusText;
    const statusCode = body?.statusCode || response.status;

    return { message, statusCode: statusCode.toString() }
}