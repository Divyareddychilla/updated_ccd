import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { CircularProgressProps } from '@mui/material';
import './circularIntegration.scss';
interface CircularIntegrationProps {
  children?: ReactNode;
  loading: boolean;
  color?: CircularProgressProps['color'];
}

const CircularIntegration: React.FC<CircularIntegrationProps> = ({
  children,
  loading,
  color = 'primary',
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }} >
      <Box sx={{ m: 1, position: 'relative' }} 
          className={loading?"loader-container-active":"loader-container"}
      >
          {children}
        {loading && (
          <CircularProgress
            color={color}  
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-21px',
              marginLeft: '-21px',
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default CircularIntegration;
