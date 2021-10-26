import axios from "axios";

const salesUrl = "http://localhost:3002/sales";

const getToken = () => {
  return `Bearer ${localStorage.getItem("token")}`;
};

export const getSale = async (id) => {
  return await axios.get(`${salesUrl}/${id}`);
};

export const getSales = async () => {
  const options = {
    method: "GET",
    url: `${salesUrl}/`,
    headers: {
      Authorization: getToken(),
    },
  };
  return await axios.request(options);
};

export const createSale = async (sale) => {
  const options = {
    method: "POST",
    url: `${salesUrl}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  };
  return await axios.request(options, sale);
};

export const deleteSale = async (id) => {
  const options = {
    method: "DELETE",
    url: `${salesUrl}/${id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
  };
  return await axios.request(options);
};

export const editSale = async (sale) => {
  const options = {
    method: "PUT",
    url: `${salesUrl}/${sale._id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
  };
  return await axios.request(options, sale);
};
