import React from 'react'
import { AppBar, Toolbar, makeStyles } from '@material-ui/core'
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#27abdb'
    },
    tabs: {
        color: '#111111',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})

export function NavBarProducts() {

    const classes = useStyle();

    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <NavLink className={classes.tabs} to="/Products">Productos</NavLink>
                <NavLink className={classes.tabs} to="/Products/add">Crear Producto</NavLink>
            </Toolbar>
        </AppBar>
    )
}
