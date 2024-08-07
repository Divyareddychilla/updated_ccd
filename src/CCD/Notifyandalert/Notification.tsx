import React from 'react';
import Alert from './components/Alert';
import PositionedSnackbar from './components/SnackBar';
import CombinedSnackbarAlert from './components/CombinedSnackbarAlert';
import {
  NotificationProps,
  SnackbarLocalProps,
  CombinedSnackbarProps,
  AlertLocalProps,
} from './types';
const Notification: React.FC<NotificationProps> = ({ type, alertInfo }) => {
  switch (type) {
    case 'snackbar':
      const snackbarinfo = alertInfo as SnackbarLocalProps;
      return <PositionedSnackbar {...snackbarinfo} />;
    case 'combinedSnackbarAlert':
      const combinedSnackbarAlertInfo = alertInfo as CombinedSnackbarProps;
      return <CombinedSnackbarAlert {...combinedSnackbarAlertInfo} />;
    case 'alert':
    default:
      const alertinfo = alertInfo as AlertLocalProps;
      return <Alert {...alertinfo} />;
  }
};

export default Notification;
