import axios from "axios";

const productsUrl = "http://localhost:3002/productos";

const getToken = () => {
  return `Bearer ${localStorage.getItem("token")}`;
};

export const getProduct = async (id) => {
  return await axios.get(`${productsUrl}/${id}`);
};

export const getProducts = async () => {
  const options = {
    method: "GET",
    url: `${productsUrl}/`,
    headers: {
      Authorization: getToken(),
    },
  };
  return await axios.request(options);
};

export const addProduct = async (product) => {
  console.log(product)
  return await axios.post(`${productsUrl}/`, product, {
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
  });
};

export const deleteProduct = async (id) => {
  const options = {
    method: "DELETE",
    url: `${productsUrl}/${id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
  };
  return await axios.request(options);
};

export const editProduct = async (product, id) => {
  return await axios.put(`${productsUrl}/${id}`, product, {
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
  });
};
