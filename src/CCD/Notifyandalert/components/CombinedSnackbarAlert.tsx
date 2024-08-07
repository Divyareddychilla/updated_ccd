import React from 'react';
import Box from '@mui/material/Box';
import { CombinedSnackbarProps } from '../types';
import PositionedSnackbar from './SnackBar';
import DefualtAlert from './Alert';

const CombinedSnackBar: React.FC<CombinedSnackbarProps> = ({
  alertTextInfo,
  containerInfo
}) => {
  return (
    <Box sx={{ width: 500 }}>
      <PositionedSnackbar
        {...containerInfo}
        // style={{ padding: "15px", backgroundColor: "red" }}
      >
        <DefualtAlert {...alertTextInfo}>
          <div>{alertTextInfo.children}</div>
        </DefualtAlert>
      </PositionedSnackbar>
    </Box>
  );
};

export default CombinedSnackBar;
