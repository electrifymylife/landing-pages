import * as React from 'react';
import MuiDialog from '@mui/material/Dialog';
import { DialogTitle, IconButton, useMediaQuery } from '@mui/material';

export const Modal = ({
  open,
  onClose,
  children,
  title,
  closeIcon = true,
  required = false,
  sx,
  PaperProps: { sx: sxPaperProps, ...PaperProps } = {},
  maxWidth = 'sm',
  fullWidth = true,
  fullScreen = false,
  borders='4px',
}) => {
  const isMobile = useMediaQuery('(max-width:767px)');
  return (
    <MuiDialog
      open={open}
      onClose={() => {
        !required && typeof onClose === 'function' && onClose();
      }}
      disableEscapeKeyDown={required}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      fullScreen={fullScreen}
      borders={borders}
      PaperProps={{
        sx: {
          padding: isMobile ? 0 : '16px',
          borderRadius: borders,
          ...sxPaperProps,
        },
        ...PaperProps,
      }}
      sx={{
        zIndex: '9999999999',
        ...sx,
      }}
    >
      {title && (
        <DialogTitle
          sx={{
            fontSize: 32,
            lineHeight: '36px',
            color: '#19192d',
            padding: '0 36px 24px 0',
          }}
        >
          {title}
        </DialogTitle>
      )}
      {closeIcon && (
        <IconButton
          className={'close-button'}
          disableRipple={true}
          sx={{
            position: 'absolute',
            right: '16px',
            top: '16px',
            height: '32px',
            width: '32px',
            backgroundColor: 'transparent',
            zIndex: 1,
            '&:hover': {
              '& > svg': {
                fill: '#73738A',
              },
            },
          }}
          onClick={() => {
            typeof onClose === 'function' && onClose();
          }}
        >
          <svg width={14} height={14} viewBox="0 0 14 14" fill="#2D2D47" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893Z" />
          </svg>
        </IconButton>
      )}

      {children}
    </MuiDialog>
  );
};
