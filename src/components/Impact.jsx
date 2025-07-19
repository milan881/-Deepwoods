import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function Impact() {
  return (
    <Container maxWidth="md">
      <Box sx={{ mb: 4, p: 2, bgcolor: '#fff3e0', borderRadius: 2 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Why Take Climate Action?
        </Typography>
        <Typography align="center">
          Small actions by individuals, when combined, create powerful collective impact. 
          By making climate-positive choices, you help build a movement for a healthier, more sustainable planet.
        </Typography>
      </Box>
    </Container>
  );
}
