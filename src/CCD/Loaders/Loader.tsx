import React from 'react';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import CircularProgressWithLabel from './CircularProgressWithLabel';
import LinearProgressWithLabel from './LinearProgressWithLabel';
import CustomizedProgressBars from './CustomizedProgressBars';
import CircularIntegration from './CircularIntegration';
import CircularUnderLoad from './CircularUnderLoad';

type ProgressType = 'circular' | 'linear' | 'customizedbar' | 'circular_child' | 'simplecircular';

interface LoaderProps {
  type?: ProgressType;
  color?: CircularProgressProps['color'] | LinearProgressProps['color'];
  showProgress?: boolean;
  progress?: number;
  gradientColors?: { offset: string; color: string }[];
  defaultStartColor?: string;
  defaultEndColor?: string;
  disableShrink?: boolean;
  children?: React.ReactNode;
  childLoading?: boolean;
  valueBuffer?: number;
  showText?: boolean;
}

const Loader: React.FC<LoaderProps> = ({
  type = 'circular',
  color = 'primary',
  progress = 0,
  showProgress = false,
  gradientColors,
  defaultStartColor,
  defaultEndColor,
  disableShrink = false,
  children,
  childLoading = false,
  valueBuffer = 0,
  showText = true,
}) => {
  switch (type) {
    case 'circular':
      return showProgress ? (
        <CircularProgressWithLabel
          color={color as CircularProgressProps['color']}
          value={progress}
          disableShrink={disableShrink}
        />
      ) : (
        <CircularProgress
          color={color as CircularProgressProps['color']}
          disableShrink={disableShrink}
        />
      );
    case 'linear':
      return showProgress ? (
        <LinearProgressWithLabel
          type={type}
          color={color as LinearProgressProps['color']}
          value={progress}
          valueBuffer={valueBuffer}
          showText={showText}
        />
      ) : (
        <LinearProgress
          color={color as LinearProgressProps['color']}
        />
      );
    case 'customizedbar':
      return (
        <CustomizedProgressBars
          gradientColors={gradientColors}
          defaultStartColor={defaultStartColor}
          defaultEndColor={defaultEndColor}
        />
      );
    case 'simplecircular':
      return (
        <CircularUnderLoad
          color={color as CircularProgressProps['color']}
        />
      );
    case 'circular_child':
      return (
        <CircularIntegration
          loading={childLoading}
          color={color as CircularProgressProps['color']}
        >
          {children}
        </CircularIntegration>
      );
    default:
      return (
        <CircularProgress
          color={color as CircularProgressProps['color']}
        />
      );
  }
};

export default Loader;