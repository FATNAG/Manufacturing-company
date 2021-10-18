import { getConection } from "../../db/db.js";
import { ObjectId } from "mongodb";

const queryAllSales = async (callback) => {
  const conection = getConection();
  await conection.collection("sales").find().limit(50).toArray(callback);
};

const queryCreateSale = async (vehicleData, callback) => {
  if (
    Object.keys(vehicleData).includes("name") &&
    Object.keys(vehicleData).includes("description") &&
    Object.keys(vehicleData).includes("value") &&
    Object.keys(vehicleData).includes("amount") &&
    Object.keys(vehicleData).includes("total")
  ) {
    const conection = getConection();
    await conection.collection("sales").insertOne(vehicleData, callback);
  } else {
    return "error";
  }
};

const queryUpdateSale = async (id, vehicleData, callback) => {
  const filterVehicle = { _id: new ObjectId(id) };
  const atomicOperation = {
    $set: vehicleData,
  };
  const conection = getConection();
  await conection
    .collection("sales")
    .findOneAndUpdate(
      filterVehicle,
      atomicOperation,
      { upsert: true, returnOriginal: true },
      callback
    );
};

const queryDeleteSale = async (id, callback) => {
  const filterVehicle = { _id: new ObjectId(id) };
  const conection = getConection();
  await conection.collection("sales").deleteOne(filterVehicle, callback);
};

export {
  queryAllSales,
  queryCreateSale,
  queryUpdateSale,
  queryDeleteSale,
};
