
import { AppBar, Button, IconButton, Stack, Toolbar, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import getUserLogged from "../../services/getUserLogged";
import { useNavigate } from "react-router-dom";


const NavBar = () => {

    let navigate = useNavigate()

    const [user, setUser] = useState('null');

    useEffect(() => {
        let token = localStorage.getItem('token');

        if(!token){
            navigate('/alert')
        }

        getUserLogged(token).then(user => {
            setUser(user.username);
        })



    }, []);



    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">

                    <Toolbar>
                        <Box sx={{ flexGrow: 1 }} >
                            <Stack direction="row" spacing={5}>
                                <Button color="inherit" size="large">Pedidos</Button>
                                <Button color="inherit" size="large">Produtos</Button>
                                <Button color="inherit" size="large">Usuarios</Button>

                            </Stack>
                        </Box>


                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title={user}>

                                <Typography >
                                    {user}
                                </Typography>

                            </Tooltip>

                        </Box>


                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default NavBar;