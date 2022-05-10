

import { Alert, AlertColor, Box, Button, Container, Grid, IconButton, Snackbar, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "../../services/LoginService";

type Inputs = {
    username: string,
    password: string,
};



const LoginForm = () => {
    let navigate = useNavigate()

    const { register, handleSubmit } = useForm<Inputs>();
    const [message, setMessage] = useState<string>();
    const [open, setOpen] = useState<boolean>(false);
    const [ severity, setSeverity ] = useState<AlertColor>('success');

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        Login({ ...data }).then(response => {
            if (response.status === 201) {
                localStorage.setItem('token', response.data.token)
                handleClick('Logado', 'success');
                navigate('/home')
                
            }
            if (response.status === 401) {
                handleClick('Usuario ou senha incorretos', 'error');
            }
            if (response.status === 404) {
                handleClick('Usuario não encontrado', 'error');
            }
        })
    };

    const handleClick = (msg: string, severity: AlertColor) => {
        setOpen(true);
        setMessage(msg);
        setSeverity(severity);
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return (
        <div>

            <Grid
                container
                spacing={10}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >

                <Grid item xs={12}>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                        <Grid container direction="column">
                            <Grid item xs={12} marginBottom={4}>
                                <TextField id="outlined-basic" label="Usuario" variant="outlined" {...register("username")} />
                            </Grid>
                            <Grid item xs={12} marginBottom={4}>
                                <TextField id="outlined-basic" label="Senha" type="password" variant="outlined" {...register("password")} />
                            </Grid>
                            <Grid item xs={12} marginLeft={7}>
                                <Button variant="outlined" type="submit">Entrar</Button>
                            </Grid>
                        </Grid>

                    </Box>
                </Grid>

            </Grid>

            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }} >
                    {message}
                </Alert>
            </Snackbar>

        </div>
    )
}

export default LoginForm;