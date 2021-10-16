const UserSchema = require('../models/user');
const { validationResult } = require('express-validator');

const getUser = async (req, res) => {
    if (req.params.id != 'undefined') {
        try {
            let user = await UserSchema.findById(req.params.id);
            res.status(200).json({ data: user });
        }
        catch (err) {
            res.status(404).json({
                error: {
                    code: 404,
                    message: "Usuario no encontrado"
                }
            })
        }
    } else {
        res.status(404).json({
            error: {
                code: 404,
                message: "ID not encontrado"
            }
        })
    }
}

const getUsers = async (req, res) => {
    try {
        let users = await UserSchema.find();
        res.status(200).json({ data: users });
    }
    catch (err) {
        res.status(404).json({
            error: {
                code: 404,
                message: "Problemas con la base de datos" + err.message
            }
        })
    }
}

const createUser = async (req, res) => {
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        
        return res.status(400).json({
            error: {
                code: 404,
                errors: errors.array()
            }
        });
    }
    let user = new UserSchema(req.body);
    try {
        await user.save();
        res.status(201).json({ data: user });
    }
    catch (err) {
        res.status(404).json({
            error: {
                code: 404,
                message: "Problemas con la base de datos" + err.message
            }
        })
    }
}

const updateUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: {
                code: 404,
                errors: errors.array()
            }
        });
    }
    try {
        let newUser = {
            id: req.params.id,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            telefono: req.body.telefono,
            autorizar: req.body.autorizar,
            rol:req.body.rol
        }
        await UserSchema.findByIdAndUpdate(req.params.id, newUser);
        res.status(201).json({ data: newUser })
    }
    catch (err) {
        res.status(404).json({
            error: {
                code: 404,
                message: "ID not encontrado"
            }
        })
    }
}


const deleteUser = async (req, res) => {
    if (req.params.id != 'undefined') {
        try {
            let result = await UserSchema.findByIdAndRemove(req.params.id);
            res.status(200).json({ data: result });
        }
        catch (err) {
            res.status(404).json({
                error: {
                    code: 404,
                    message: "Usuario no encontrado"
                }
            })
        }
    } else {
        res.status(404).json({
            error: {
                code: 404,
                message: "ID not encontrado"
            }
        })
    }
}

module.exports.getUser = getUser;
module.exports.getUsers = getUsers;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;