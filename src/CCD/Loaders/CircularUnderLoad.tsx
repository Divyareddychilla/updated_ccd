import React from 'react';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';

interface CircularUnderLoadProps {
  color?: CircularProgressProps['color'];
}

const CircularUnderLoad: React.FC<CircularUnderLoadProps> = ({ color = 'primary' }) => {
  return <CircularProgress disableShrink color={color} />;
};

export default CircularUnderLoad;
