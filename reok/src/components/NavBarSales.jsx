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

export function NavBarSales() {

    const classes = useStyle();

    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <NavLink className={classes.tabs} to="/Sales">Ventas</NavLink>
                <NavLink className={classes.tabs} to="/Sales/add">Registar Venta</NavLink>
            </Toolbar>
        </AppBar>
    )
}
