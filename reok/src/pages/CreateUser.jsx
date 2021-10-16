import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import { addUser } from '../services/UserService';
import { useHistory } from 'react-router-dom';

const initialValue = {
    nombre:'',
    apellido:'',
    email:'',
    telefono:'',
    autorizar:true,
    rol:'',
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

export function CreateUser() {
    const [user, setUser] = useState(initialValue);
    const { nombre, apellido, email, telefono, autorizar, rol } = user;

    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onStateChange = (state) => {
        setUser({ ...user, "autorizar": state });
    }

    const addUserData = async () => {
        await addUser(user);
        history.push('/Users');
    }

    return (
        <FormGroup className={classes.container} >
            <Typography variant="h4">Registrar Usuario</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Nombre</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="descripcion" value={nombre} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Apellido</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="descripcion" value={apellido} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="descripcion" value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Telefono</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="valor" value={telefono} id="my-input" />
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Autorizar</FormLabel>
                <RadioGroup
                    name='autorizar'
                    onChange={(e) => onStateChange(e.target.value === "autorizado")}
                    aria-label="autorizar"
                    defaultValue="autorizado"
                    value={autorizar ? "autorizado" : "denegado"}>
                    <FormControlLabel value="autorizado" control={<Radio />} label="Autorizado" />
                    <FormControlLabel value="denegado" control={<Radio />} label="Denegado" />
                </RadioGroup>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Rol</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="valor" value={rol} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={(e) => addUserData()} color="primary">Agregar Usuario</Button>
            </FormControl>
        </FormGroup>
    )
}
