// for alert component
import { AlertProps } from '@mui/material/Alert';

export interface AlertLocalProps extends AlertProps {
    children: JSX.Element | string;
    autoHideDuration?: number;
}


// for snackbar component
import { SnackbarOrigin, SnackbarProps } from '@mui/material/Snackbar';
export interface PositionedSnackbarProps extends SnackbarProps {
    children?: JSX.Element;
}
export type SnackbarLocalOrigin = SnackbarOrigin;
export type SnackbarLocalProps = SnackbarProps;


// for combined snackbar and alert
export interface CombinedSnackbarProps {
        alertTextInfo: AlertLocalProps;
        containerInfo: PositionedSnackbarProps;
}

// for Notification component 

export type NotificationProps = {
    type?: 'alert' | 'snackbar' | 'combinedSnackbarAlert';
    alertInfo: AlertLocalProps | SnackbarLocalProps | CombinedSnackbarProps;
}