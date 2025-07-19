import React from 'react';
import { Box, Typography, Paper, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Certificate({ name, stars, onClose }) {
  return (
    <Paper elevation={6} sx={{
      p: 4,
      mx: 'auto',
      mt: 3,
      mb: 3,
      textAlign: 'center',
      maxWidth: 400,
      bgcolor: '#e0f7fa'
    }}>
      <Typography variant="h5" sx={{ mb: 1 }}>
        Certificate of Climate Action
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        {name}
      </Typography>
      <Typography sx={{ mb: 2 }}>
        is <strong>Cool Enough to Care!</strong>
      </Typography>
      <Rating
        value={stars}
        max={3}
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteIcon fontSize="inherit" />}
        readOnly
      />
      <Typography variant="body2" sx={{ mt: 2 }}>
        Thank you for your commitment to a healthier planet.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <button onClick={onClose} style={{
          background: '#00acc1', color: 'white', border: 'none',
          borderRadius: 4, padding: '8px 18px', cursor: 'pointer', fontSize: '1rem'
        }}>
          Close
        </button>
      </Box>
    </Paper>
  );
}
