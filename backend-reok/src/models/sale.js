const {Schema, model} = require("mongoose");

const SaleSchema = Schema({
    codigo: {
        type: String
    },
    descripcion: {
        type: String
    },
    valorUnitario:{
        type: Number
    },
    Cantidad : {
        type: Number
    },
    valorTotal : {
        type: Number
    }
});

module.exports = model("Sale", SaleSchema);