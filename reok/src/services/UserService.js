import axios from "axios";

const usersUrl = "http://localhost:3002/usuarios";

export const getUser = async (id) => {
    return await axios.get(`${usersUrl}/${id}`);
}

export const getUsers = async () => {
    return await axios.get(`${usersUrl}/`);
}

export const addUser = async (product) => {
    return await axios.post(`${usersUrl}/`, product);
    
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (product) => {
    return await axios.put(`${productsUrl}/${product._id}`, product);
}