import React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

interface GradientCircularProgressProps {
    gradientColors?: { offset: string; color: string }[];
    defaultStartColor?: string;
    defaultEndColor?: string;
}

const GradientCircularProgress: React.FC<GradientCircularProgressProps> = ({
    gradientColors,
    defaultStartColor = '#e01cd5',
    defaultEndColor = '#1CB5E0',
}) => {
    const gradientId = `gradient_${Math.random().toString(36).substr(2, 9)}`;

    const defaultGradient = [
        { offset: '0%', color: defaultStartColor },
        { offset: '100%', color: defaultEndColor }
    ];

    const gradientStops = gradientColors?.length ? gradientColors : defaultGradient;

    return (
        <React.Fragment>
            <svg width={0} height={0}>
                <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
                        {gradientStops.map((stop, index) => (
                            <stop key={index} offset={stop.offset} stopColor={stop.color} />
                        ))}
                    </linearGradient>
                </defs>
            </svg>
            <CircularProgress sx={{ 'svg circle': { stroke: `url(#${gradientId})` } }} />
        </React.Fragment>
    );
};

interface CustomizedProgressBarsProps {
    gradientColors?: { offset: string; color: string }[];
    defaultStartColor?: string;
    defaultEndColor?: string;
}

const CustomizedProgressBars: React.FC<CustomizedProgressBarsProps> = ({
    gradientColors,
    defaultStartColor,
    defaultEndColor,
}) => {
    return (
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <GradientCircularProgress
                gradientColors={gradientColors}
                defaultStartColor={defaultStartColor}
                defaultEndColor={defaultEndColor}
            />
        </Stack>
    );
};

export default CustomizedProgressBars;
