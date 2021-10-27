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
  return await axios.post(`${salesUrl}/`, sale, {
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
  });
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

export const editSale = async (sale, id) => {
  return await axios.put(`${salesUrl}/${id}`, sale, {
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
  });
};
