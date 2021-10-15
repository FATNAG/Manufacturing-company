import axios from "axios";

const usersUrl = "http://localhost:3002/usuarios";

export const getUser = async (id) => {
    return await axios.get(`${usersUrl}/${id}`);
}

export const getUsers = async () => {
    return await axios.get(`${usersUrl}/`);
}

export const addUser = async (product) => {
    return await axios.post(`${usersUrl}/`, user);
    
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (user) => {
    return await axios.put(`${UsersUrl}/${user._id}`, user);
}