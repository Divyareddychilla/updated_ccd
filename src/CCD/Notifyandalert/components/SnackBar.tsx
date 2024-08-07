import * as React from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';

import { PositionedSnackbarProps } from '../types';
const PositionedSnackbar: React.FC<PositionedSnackbarProps> = (props) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    console.log('closed')
    setOpen(false); 
  };

  return (
   <Box sx={{ width: 500 }}>
      <Snackbar
        open={open}
        onClose={handleClose}
        {...props}  
      >
       {props.children}
      </Snackbar>
    </Box>
  );
};

export default PositionedSnackbar;
