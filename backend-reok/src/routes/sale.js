const { Router} = require ("express");
const Venta = require("../models/sale");
const router = Router();

let sales =[
    {codigo: "123", descripcion: "minicuaderno", valorUnitario: "1000", cantidad : "2", valorTotal : "2000"},
    {codigo: "124", descripcion: "maxicuaderno", valorUnitario: "2000", cantidad : "3", valorTotal : "6000"},
    {codigo: "125", descripcion: "cuaderno", valorUnitario: "1500", cantidad : "1", valorTotal : "1500"},
];

//router.get("/", (request, response)=>{
   // response.json(sales);
    //response.json({
    //    codigo: "123",
    //    descripcion: "minicuaderno",
     //   valorUnitario: "1000",
    //    cantidad : "2",
    //    valorTotal : "2000",
    //   });
//});

router.post("/", async (request, response)=>{
   // console.log('informacion para el post', request.body);
    const{codigo, descripcion, valorUnitario, cantidad, valorTotal} = request.body;
    const infoVentaRecibida = {codigo, descripcion, valorUnitario, cantidad, valorTotal};

    if (!descripcion){
        response.status(400).json({
         error: "descripcion de la venta no recibida",   
        })
        return;

        try{
            const venta = new Venta(infoVentaRecibida);
            await venta.save();
            response.status(201).json({
                mensaje: "La venta se creo correctamente",
                venta: infoVentaRecibida,
            });

        } catch (error) {
            response.status(500).json({
                mensaje: "No se pudo guardar la venta",
                error = error,
            });
        }



    }
//    sales.push({codigo, descripcion, valorUnitario, cantidad, valorTotal});
//    response.status(201).json({
//        mensaje: "La venta se creo correctamente",
//        venta: infoVentaRecibida
//    });
//    response.json({
//        "mensaje": "postVenta"
//    });
//});


router.delete("/", (request, response)=>{
    response.json({
        "mensaje": "deleteVenta"
    });
});
router.put("/", (request, response)=>{
    response.json({
        "mensaje": "putVenta"
    });
});

module.exports = router;
