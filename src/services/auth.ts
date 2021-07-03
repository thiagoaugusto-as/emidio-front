import { api } from "./api";

interface Response {
    token: string;
    user: {
        name: string;
        username: string;
    };
}

interface InputLogin {
    password: string;
    username: string;
}

export async function signIn({ password, username }: InputLogin): Promise<Response | undefined> {
    try {
        const response = await api.post('/sessions', {
            username,
            password
        });
        
        return response.data;
    } catch (error) {
        return undefined;
    }    
}