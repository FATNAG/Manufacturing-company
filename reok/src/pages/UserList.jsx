import React, { useState, useEffect } from 'react'
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core';
import { getUsers,deleteUser} from '../services/UserService';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})

export function UserList() {
    const classes = useStyles();

    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data.data);
    }

    const deleteUserData = async (id) => {
        let callbackUser = window.confirm('Esta seguro de eliminar el usuario');
        if (callbackUser) {
            await deleteUser(id);
            getAllUsers();
        }
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Apellido</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Telefono</TableCell>
                    <TableCell>Autorizar</TableCell>
                    <TableCell>Rol</TableCell>
                    <TableCell>Accion</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow className={classes.row} key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.nombre}</TableCell>
                            <TableCell>{user.apellido}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.telefono}</TableCell>
                            <TableCell>{user.autorizar ? "Autorizado" : "Denegado"}</TableCell>
                            <TableCell>{user.rol}</TableCell>
                            <TableCell>
                                <Button component={Link} to={`/Users/edit/${user._id}`} color="primary">Editar</Button>
                                <Button color="secondary" onClick={() => deleteUserData(user._id)} >Borrar</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
