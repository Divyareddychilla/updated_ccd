import React from 'react';
import Notification from './Notification';
import CheckIcon from '@mui/icons-material/Check';
import { AlertLocalProps, SnackbarLocalProps, CombinedSnackbarProps } from './types';

const NotificationIndex: React.FC = () => {
  
  const alertDetails:AlertLocalProps = {
    severity: 'warning',
    children: "this is an error Alert.",
    autoHideDuration: 4000,
    icon: <CheckIcon fontSize="inherit" />,
  };

  const snackbarDetails:SnackbarLocalProps = {
    autoHideDuration: 6000,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    message:"this is an error alert",
    //children: <span>this is an error Alert.</span>,
  };

  const combinationSnackbarAlertDetails:CombinedSnackbarProps = {
    alertTextInfo: {
      severity: 'warning',
      children: "this is an error Alert.",
      icon: <CheckIcon fontSize="inherit" />,
    },
    containerInfo:{
      autoHideDuration: 8000,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center' 
      },
    },

  };

  return (
    <div>
      <div className="alerts">
       <Notification
          type="alert"
          alertInfo={alertDetails}
        />
        <Notification
          type="snackbar"
          alertInfo={snackbarDetails}
        /> 
        <Notification
          type="combinedSnackbarAlert"
          alertInfo={combinationSnackbarAlertDetails}
        />
        {/* <Notification
          type="alert"
          severity="info"
          message="This is an info Alert."
        /> */}
      </div>
    </div>
  );
};

export default NotificationIndex;
