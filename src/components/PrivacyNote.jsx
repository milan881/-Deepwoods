import React from 'react';
import { Typography, Box } from '@mui/material';

export default function PrivacyNote() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="body2" color="text.secondary">
        <strong>Privacy Note:</strong> Mobile Number and Email are required for validation but never shown publicly. Data is used only for verification and engagement.
      </Typography>
    </Box>
  );
}
