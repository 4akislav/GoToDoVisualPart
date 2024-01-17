import axios from "axios";
import { apiUrl } from "../config";

export const authenticateUser = async (username: string, password: string) => {
    let apiKey: string | undefined
    try {
        const response = await axios.post(`${apiUrl}auth/sign-in`, {
            username: username,
            password: password
    });
    apiKey = response.data.api_key;
    console.log('API Key:', apiKey)
}
    catch (error) {
        console.error('Authentication failed:', error);
    }
    return apiKey
};
