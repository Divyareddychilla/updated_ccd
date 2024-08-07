import React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface LinearProgressWithLabelProps extends LinearProgressProps {
    value: number;
    valueBuffer: number;
    showText?: boolean;
    type?: string; //if the type is linear the mr will be zero
}

const LinearProgressWithLabel: React.FC<LinearProgressWithLabelProps> = (props) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: props.type === 'linear' ? 0 : 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            {props.showText !== false && (
                <Box sx={{ minWidth: 35 }}>
                    <Typography style={{ marginLeft: "8px" }} variant="body2" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
                 {/* if text needed ml will be applied */}
                </Box>
            )}
        </Box>
    );
};

export default LinearProgressWithLabel;
