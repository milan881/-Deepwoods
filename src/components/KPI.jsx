import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

export default function KPIs({ pledges }) {
  const target = 1000000;
  const achieved = pledges.length;

  const studentCount = pledges.filter(p => p.profile === 'Student').length;
  const profCount = pledges.filter(p => p.profile === 'Working Professional').length;
  const otherCount = pledges.filter(p => p.profile === 'Other').length;

  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} md={3}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h5">{target.toLocaleString()}</Typography>
            <Typography variant="subtitle1">Target Pledges</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h5">{achieved}</Typography>
            <Typography variant="subtitle1">Achieved Pledges</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4} md={2}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">{studentCount}</Typography>
            <Typography variant="body2">Students</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4} md={2}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">{profCount}</Typography>
            <Typography variant="body2">Professionals</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4} md={2}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">{otherCount}</Typography>
            <Typography variant="body2">Others</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
