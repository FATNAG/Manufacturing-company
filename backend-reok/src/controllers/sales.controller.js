const Sales = require("../models/sales");
const { validationResult } = require("express-validator");

const getSale = async (req, res) => {
  if (req.params.id != "undefined") {
    try {
      let sale = await Sales.findById(req.params.id);
      res.status(200).json({ data: sale });
    } catch (err) {
      res.status(404).json({
        error: {
          code: 404,
          message: "Sale not found",
        },
      });
    }
  } else {
    res.status(404).json({
      error: {
        code: 404,
        message: "ID not found",
      },
    });
  }
};

const getSales = async (req, res) => {
  try {
    let sales = await Sales.find();
    res.status(200).json({ data: sales });
  } catch (err) {
    res.status(404).json({
      error: {
        code: 404,
        message: "Problems with the DB: " + err.message,
      },
    });
  }
};

const createSale = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: {
        code: 404,
        errors: errors.array(),
      },
    });
  }
  let sale = new Sales(req.body);
  try {
    await sale.save();
    res.status(201).json({ data: sale });
  } catch (err) {
    res.status(404).json({
      error: {
        code: 404,
        message: "Problemas con la base de datos" + err.message,
      },
    });
  }
};

const updateSale = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: {
        code: 404,
        errors: errors.array(),
      },
    });
  }
  try {
    let newsale = {
      id: req.params.id,
      valor: req.body.valor,
      descripcion: req.body.descripcion,
      estado: req.body.estado,
    };
    await Sales.findByIdAndUpdate(req.params.id, newsale);
    res.status(201).json({ data: newsale });
  } catch (err) {
    res.status(404).json({
      error: {
        code: 404,
        message: "ID not found",
      },
    });
  }
};

const deleteSale = async (req, res) => {
  if (req.params.id != "undefined") {
    try {
      let result = await Sales.findByIdAndRemove(req.params.id);
      res.status(200).json({ data: result });
    } catch (err) {
      res.status(404).json({
        error: {
          code: 404,
          message: "saleo no encontrado",
        },
      });
    }
  } else {
    res.status(404).json({
      error: {
        code: 404,
        message: "ID not found",
      },
    });
  }
};

module.exports.getSale = getSale;
module.exports.getSales = getSales;
module.exports.createSale = createSale;
module.exports.updateSale = updateSale;
module.exports.deleteSale = deleteSale;