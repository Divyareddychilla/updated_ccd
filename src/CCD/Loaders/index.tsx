

import React, { useState } from 'react';
import Loader from './Loader';
import { CircularProgressProps } from '@mui/material/CircularProgress';
import  { LinearProgressProps } from '@mui/material/LinearProgress';
import { Typography } from '@mui/material';

const LoaderIndex: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout>>();

  const handleButtonClick = () => {
    if (!loading) {
      setLoading(true);
      timer.current = setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const loaderDetailsCircular = {
    color: 'success' as CircularProgressProps['color'],
    showProgress: true,
    progress: 10,
    disableShrink: true,
  };

  const loaderDetailsLinear = {
    color: 'primary' as LinearProgressProps['color'],
    showProgress: true,
    progress: 50,
    disableShrink: true,
    valueBuffer: 30,
  };

  const customGradientColors = [
    { offset: '10%', color: '#FF5733' },
    { offset: '50%', color: '#C70039' },
    { offset: '100%', color: '#900C3F' },
    
  ];

  // const loaderSimple = {
  //   color: 'success' as CircularProgressProps['color'],
  // };

  const integrationSimple = {
    color: 'success' as CircularProgressProps['color'],
  };

  return (
    <div>
      <div className='circular_loaders'>
        <Loader type="circular" color={loaderDetailsCircular.color} showProgress={loaderDetailsCircular.showProgress} progress={loaderDetailsCircular.progress} disableShrink={loaderDetailsCircular.disableShrink} />
        <Loader type="circular" showProgress={loaderDetailsCircular.showProgress} color={loaderDetailsCircular.color} />
        <Loader type="circular" color={loaderDetailsCircular.color} />
        <Loader type="circular" disableShrink={loaderDetailsCircular.disableShrink} />
        <Loader type="circular" />
      </div>

      <div className='linear_loaders'>
        <Loader type="linear" color={loaderDetailsLinear.color} showProgress={loaderDetailsLinear.showProgress} progress={loaderDetailsLinear.progress} />
        <Loader type="linear" showProgress={loaderDetailsLinear.showProgress} color={loaderDetailsLinear.color} />
        <Loader type="linear" />
        {/* <Loader type="linear" valueBuffer={loaderDetailsLinear.valueBuffer} /> */}
      </div>

      <div className='customized_loaders'>
        <Loader type="customizedbar" gradientColors={customGradientColors} />
         <Loader type="customizedbar" />
      </div>

      {/* <div className='simplecircular_loader'>
        <Loader type="simplecircular" color={loaderSimple.color} />
      </div> */}

      <div className='integration_loader'>
        <Loader type="circular_child" childLoading={loading} color={integrationSimple.color}>
          <Typography >
            Hello
          </Typography>
        </Loader>
        <Loader type="circular_child" childLoading={loading} color={integrationSimple.color} >
          <p onClick={handleButtonClick}>Custom Card Content</p>
        </Loader>
      </div>
       
      <Loader />
    </div>
  );
};

export default LoaderIndex;
