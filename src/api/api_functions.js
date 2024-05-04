import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

export const register = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};