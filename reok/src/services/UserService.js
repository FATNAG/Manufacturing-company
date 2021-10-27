import axios from "axios";

const usersUrl = "http://localhost:3002/usuarios";

const getToken = () => {
  return `Bearer ${localStorage.getItem("token")}`;
};

export const getUser = async (id) => {
  return await axios.get(`${usersUrl}/${id}`);
};

export const getUsers = async () => {
  const options = {
    method: "GET",
    url: `${usersUrl}/`,
    headers: {
      Authorization: getToken(),
    },
  };
  return await axios.request(options);
};

export const addUser = async (user) => {
  return await axios.post(`${usersUrl}/`, user, {
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
  });
};

export const deleteUser = async (id) => {
  const options = {
    method: "DELETE",
    url: `${usersUrl}/${id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
  };
  return await axios.request(options);
};

export const editUser = async (user, id) => {
  return await axios.put(`${usersUrl}/${id}`, user, {
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
  });
};
