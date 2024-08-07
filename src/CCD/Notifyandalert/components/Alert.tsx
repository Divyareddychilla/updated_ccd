import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { AlertLocalProps } from '../types';

const TimedAlerts: React.FC<AlertLocalProps> = React.forwardRef(({ severity, children, autoHideDuration, icon }, ref) => {
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    if (autoHideDuration) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, autoHideDuration);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [autoHideDuration]);

  const handleClose = () => {
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div  ref={ref}>
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={severity} onClose={handleClose} icon={icon}>
        {children}
      </Alert>
    </Stack>
    </div>
  );
});

export default TimedAlerts;
