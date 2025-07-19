import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';

export default function HeroSection({ onPledgeClick }) {
  return (
    <Box sx={{ bgcolor: '#e3f2fd', py: 6, mb: 4, textAlign: 'center' }}>
      <Container>
        <Typography variant="h3" component="h1" gutterBottom>
          Join the Climate Action Pledge!
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Every action counts. Take a pledge for a better planet and inspire others!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onPledgeClick}
        >
          Take the Pledge
        </Button>
      </Container>
    </Box>
  );
}
