import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AlertDialog() {
    let navigate = useNavigate()
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, [])

    const handleClose = () => {
        setOpen(false);
        navigate('/')

    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {'Você não está logado'}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Logar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}