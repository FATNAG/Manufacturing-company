import axios from "axios";

const executeRequest = async (options, resCallback, errCallback) => {
  await axios.request(options).then(resCallback).catch(errCallback);
};

// CRUD Ventas

export const createSale = async (data, resCallback, errCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:5000/sales/new/",
    headers: { "Content-Type": "application/json" },
    data,
  };
  await executeRequest(options, resCallback, errCallback);
};

export const obtainSales = async (resCallback, errCallback) => {
  const options = { method: "GET", url: "http://localhost:5000/sales/" };
  await executeRequest(options, resCallback, errCallback);
};

export const updateSale = async (
  id,
  data,
  resCallback,
  errCallback
) => {
  const options = {
    method: "PATCH",
    url: `http://localhost:5000/sales/${id}/`,
    headers: { "Content-Type": "application/json" },
    data,
  };
  await executeRequest(options, resCallback, errCallback);
};

export const deleteSale = async (id, resCallback, errCallback) => {
  const options = {
    method: "DELETE",
    url: `http://localhost:5000/sales/${id}/`,
    headers: { "Content-Type": "application/json" },
  };
  await executeRequest(options, resCallback, errCallback);
};