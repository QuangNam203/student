import * as React from 'react';
import Button from '@mui/joy/Button';
import Snackbar from '@mui/joy/Snackbar';
import { keyframes } from '@mui/system';
import { useContext } from 'react';
import {SnackbarContext} from './ModalContext';
import Alert from '@mui/material/Alert';

const inAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const outAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

export default function SnackbarComponent(props) {

    const SnackContext = useContext(SnackbarContext)
    const animationDuration = 600;

    const handleClick = () => {
        SnackContext.setOpen(true);
    };

    const handleClose = () => {
        SnackContext.setOpen(false);
    };

    return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={SnackContext.open}
        onClose={handleClose}
        autoHideDuration={2000}
        animationDuration={animationDuration}
        sx={{
            ...(SnackContext.open && {
            animation: `${inAnimation} ${animationDuration}ms forwards`,
            }),
            ...(!SnackContext.open && {
            animation: `${outAnimation} ${animationDuration}ms forwards`,
            }),
           
        }}
        >
        <Alert
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
        >
            {SnackContext.content}
        </Alert>
    </Snackbar>
    </>
  );
}