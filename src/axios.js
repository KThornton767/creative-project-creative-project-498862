import axios from "axios";

class ApiClient {
    constructor(remoteHostUrl) {
        this.remoteHostUrl = remoteHostUrl;
    }

    async request({ endpoint, method = "GET", data = {} }) {
        const url = `${this.remoteHostUrl}/${endpoint}`;

        const headers = {
            "Content-Type": "application/json",
        };

        if (this.token !== "null") {
            headers[`Authorization`] = `Bearer ${this.token}`;
        }

        try {
            const res = await axios({ url, method, data, headers });
            return { data: res.data, error: null };
        } catch (error) {
            console.error({ errorResponse: error.response });
            const message = error.response.data.error.message;
            return { data: null, error: message || String(error) };
        }
    }

    async login(credentials) {
        //send an http request to the auth/login endpoint
        return await this.request({ endpoint: `/login`, method: `POST`, data: credentials });
    }

    async register(credentials) {
        //send an http request to the auth/register endpoint
        return await this.request({ endpoint: `/register`, method: `POST`, data: credentials });
    }
   
}

export default new ApiClient( "http://localhost:3001" );