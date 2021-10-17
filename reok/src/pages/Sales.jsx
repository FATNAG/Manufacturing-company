import Navbar from "components/Navbar";
import React from "react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { nanoid } from "nanoid";
import { Dialog, Tooltip } from "@mui/material";
import { obtainSales } from "utils/api";
import { createSale } from "utils/api";
import "assets/css/sales.css";

const Sales = () => {
  const [showTable, setShowTable] = useState(true);
  const [sales, setSales] = useState([]);
  const [textButton, setTextButton] = useState("Crear Nuevo Vehículo");
  const [runQuery, setRunQuery] = useState(true);

  useEffect(() => {
    const obtainSales = async () => {
      var config = {
        method: "GET",
        url: "http://localhost:5000/sales",
        headers: {},
      };

      await axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          setSales(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    if (runQuery) {
      obtainSales();
      setRunQuery(false);
    }
  }, [runQuery]);
  

  // useEffect(() => {
  //   // Geeting vehicles list from the Frontend
  //   if (showTable) {
  //     setRunQuery(true);
  //   }
  // }, [showTable]);

  // useEffect(() => {
  //   if (setRunQuery) {
  //     obtainSales(
  //       (response) => {
  //         setSales(response.data);
  //       },
  //       (err) => {
  //         console.error(err);
  //       }
  //     );
  //     setRunQuery(false);
  //   }
  // }, [setRunQuery]);

  // useEffect(() => {
  //   if (showTable) {
  //     setRunQuery(true);
  //   }
  // }, [showTable]);

  useEffect(() => {
    if (showTable) {
      setTextButton("Create New sales");
    } else {
      setTextButton("Show all Sales");
    }
  }, [showTable]);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-start sales-main-container">
      <Navbar title={'Sales'}/>
      <div className="flex w-full bg-blue-500 px-8 py-4 items-center shadow">
        <button
          onClick={() => {
            setShowTable(!showTable);
          }}
          className={`text-gray-800 font-bold text-2xl hover:no-underline`}
        >
          {textButton}
        </button>
      </div>
      <main className="flex flex-col justify-center items-center h-screen w-full">
        {showTable ? (
          <SalesTable salesList={sales} setRunQuery={setRunQuery} />
        ) : (
          <SalesForm
            setShowTable={setShowTable}
            salesList={sales}
            setSales={setSales}
          />
        )}
      </main>
    </div>
  );
};

const SalesTable = ({ salesList, setRunQuery }) => {
  const [filteredSales, setFilteredSales] = useState(salesList);

  return (
    <div className="flex flex-col items-center justify-center w-full p-10 ">
      <div className="hidden md:flex w-full overflow-y-scroll max-h-96">
        <table className="w-full">
          <thead className="sticky top-0">
            <tr>
              <th className="px-4 py-2 text-xl font-bold">Id</th>
              <th className="px-4 py-2 text-xl font-bold">Name</th>
              <th className="px-4 py-2 text-xl font-bold">Description</th>
              <th className="px-4 py-2 text-xl font-bold">Value</th>
              <th className="px-4 py-2 text-xl font-bold">Amount</th>
              <th className="px-4 py-2 text-xl font-bold">Total</th>
              <th className="px-4 py-2 text-xl font-bold">Actions</th>
            </tr>
          </thead>
          <tbody className="max-w-screen">
            {filteredSales.map((sales) => {
              return (
                <SaleRow
                  key={nanoid()}
                  sales={sales}
                  setRunQuery={setRunQuery}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col w-full m-2 md:hidden">
        {filteredSales.map((el) => {
          return (
            <div className="bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl">
              <span>{el._id}</span>
              <span>{el.name}</span>
              <span>{el.description}</span>
              <span>{el.value}</span>
              <span>{el.amount}</span>
              <span>{el.total}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SaleRow = ({ sales, setRunQuery }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

    const [infoNewSale, setInfoNewSale] = useState({
      _id: sales._id,
      name: sales.name,
      description: sales.description,
      value: sales.value,
      amount: sales.amount,
      total: sales.total,
    });

  // const updateSale = async () => {
  //   await updateSale(
  //     sales._id,
  //     { ...infoNewSale },
  //     (response) => {
  //       setEdit(false);
  //       setRunQuery(true);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // };

  const updateSale = async () => {
    var data = JSON.stringify({
      name: sales.name,
      description: sales.description,
      value: sales.value,
      amount: sales.amount,
      total: sales.total,
    });

    var config = {
      method: "PATCH",
      url: `http://localhost:5000/sales/${sales._id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setOpenDialog(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // const deleteSale = async () => {
  //   await deleteSale(
  //     sales._id,
  //     (response) => {
  //       console.log(response.data);
  //       setRunQuery(true);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );

  //   setOpenDialog(false);
  // };
  const deleteSale = async () => {
    var config = {
      method: "DELETE",
      url: `http://localhost:5000/sales/${sales._id}/`,
      headers: {},
    };

    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setRunQuery(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <tr className="">
      {edit ? (
        <>
          <td>{infoNewSale._id}</td>
          <td>
            <input
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              type="text"
              value={infoNewSale.name}
              onChange={(e) =>
                setInfoNewSale({
                  ...infoNewSale,
                  _id: e.target.value,
                })
              }
            />
          </td>
          <td>
              <textarea
                className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 w-96"
                type="text"
                value={infoNewSale.description}
                onChange={(e) =>
                  setInfoNewSale({
                    ...infoNewSale,
                    name: e.target.value,
                  })
                }
              />
          </td>
          <td>
            <input
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              type="text"
              value={infoNewSale.value}
              onChange={(e) =>
                setInfoNewSale({
                  ...infoNewSale,
                  description: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              type="text"
              value={infoNewSale.amount}
              onChange={(e) =>
                setInfoNewSale({
                  ...infoNewSale,
                  value: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              type="text"
              value={infoNewSale.total}
              onChange={(e) =>
                setInfoNewSale({
                  ...infoNewSale,
                  amount: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              type="text"
              value={infoNewSale.total}
              onChange={(e) =>
                setInfoNewSale({
                  ...infoNewSale,
                  total: e.target.value,
                })
              }
            />
          </td>
        </>
      ) : (
        <>
          <td>{sales._id.slice(20)}</td>
          <td>{sales.name}</td>
          <td>
            <div className="w-auto max-w-lg">
              {sales.description}
            </div>
          </td>
          <td>{sales.value}</td>
          <td>{sales.amount}</td>
          <td>{sales.total}</td>
        </>
      )}
      <td>
        <div className="flex w-full justify-around items-center">
          {edit ? (
            <>
              <Tooltip title="Confirmar Edición" arrow>
                <i
                  onClick={() => {
                    updateSale();
                    setEdit(!edit);
                  }}
                  className="fas fa-check text-green-700 hover:text-green-500"
                />
              </Tooltip>
              <Tooltip title="Cancelar edición" arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className="fas fa-ban text-yellow-700 hover:text-yellow-500"
                />
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title="Editar Vehículo" arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className="fas fa-pencil-alt text-yellow-700 hover:text-yellow-500"
                />
              </Tooltip>
              <Tooltip title="Eliminar Vehículo" arrow>
                <i
                  onClick={() => setOpenDialog(true)}
                  className="fas fa-trash text-red-700 hover:text-red-500"
                />
              </Tooltip>
            </>
          )}
        </div>
        <Dialog open={openDialog}>
          <div className="p-8 flex flex-col">
            <h1 className="text-gray-900 text-2xl font-bold">
              ¿Está seguro de querer eliminar el vehículo?
            </h1>
            <div className="flex w-full items-center justify-center my-4">
              <button
                onClick={() => deleteSale()}
                className="mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md"
              >
                Sí
              </button>
              <button
                onClick={() => setOpenDialog(false)}
                className="mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md"
              >
                No
              </button>
            </div>
          </div>
        </Dialog>
      </td>
    </tr>
  );
};

const SalesForm = ({ setShowTable }) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const newSale = {};

    formData.forEach((value, key) => {
      newSale[key] = value;
    });

    var data = JSON.stringify({
      name: newSale.name,
      description: newSale.description,
      value: newSale.value,
      amount: newSale.amount,
      total: newSale.total,
    });

    var config = {
      method: "POST",
      url: "http://localhost:5000/sales/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    setShowTable(true);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800">Create New Sale</h2>
      <form
        ref={form}
        onSubmit={submitForm}
        className="block w-screen py-5 px-7 sm:grid sm:grid-cols-2 sm:gap-5 sm:px-20 lg:px-52 xl:px-72 2xl:px-96"
      >
        <label className="font-bold" htmlFor="name">
          Name
          <input
            className="w-full mb-2 bg-gray-100 border border-gray-400 rounded-lg outline-none focus:border-yellow-500 py-2 px-4"
            type="text"
            placeholder="Books"
            name="name"
            required
          />
        </label>
        <label className="font-bold" htmlFor="description">
          Description
          <input
            className="w-full mb-2 bg-gray-100 border border-gray-400 rounded-lg outline-none focus:border-yellow-500 py-2 px-4"
            type="box"
            placeholder="Description"
            name="description"
            required
          />
        </label>
        <label className="font-bold" htmlFor="value">
          Value
          <input
            className="w-full mb-2 bg-gray-100 border border-gray-400 rounded-lg outline-none focus:border-yellow-500 py-2 px-4"
            type="number"
            placeholder="unit value $"
            name="value"
            min="1"
            required
          />
        </label>
        <label className="font-bold" htmlFor="amount">
          Amount
          <input
            className="w-full mb-2 bg-gray-100 border border-gray-400 rounded-lg outline-none focus:border-yellow-500 py-2 px-4"
            type="number"
            placeholder="amount of the sale"
            name="amount"
            min="1"
            required
          />
        </label>
        <label className="font-bold" htmlFor="total">
          Total
          <input
            className="w-full mb-2 bg-gray-100 border border-gray-400 rounded-lg outline-none focus:border-yellow-500 py-2 px-4"
            type="number"
            placeholder="amount*unitValue"
            name="total"
            required
          />
        </label>
        <button
          type="submit"
          className="font-bold mt-5 w-full col-span-2 p-2 bg-gradient-to-r border border-yellow-500 shadow-md rounded-full hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:text-gray-100"
        >
          Save Sale
        </button>
      </form>
    </div>
  );
};

export default Sales;
