import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

interface ModalWindowProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function ModalWindow({
  open,
  onClose,
  children,
}: ModalWindowProps) {
  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
}
