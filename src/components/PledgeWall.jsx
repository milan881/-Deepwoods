import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Rating, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function PledgeWall({ pledges }) {
  return (
    <Paper sx={{ mt: 3, mb: 3, p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        🌎 Public Pledge Wall
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Pledge ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Profile</TableCell>
              <TableCell>⭐ Love for Planet</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pledges.map((p, idx) => (
              <TableRow key={p.id || idx}>
                <TableCell>{p.id}</TableCell>
                <TableCell>{p.name}</TableCell>
                <TableCell>{p.date}</TableCell>
                <TableCell>{p.state}</TableCell>
                <TableCell>{p.profile}</TableCell>
                <TableCell>
                  <Rating
                    value={p.stars}
                    max={3}
                    icon={<FavoriteIcon color="error" fontSize="inherit" />}
                    emptyIcon={<FavoriteIcon fontSize="inherit" />}
                    readOnly
                  />
                </TableCell>
              </TableRow>
            ))}
            {pledges.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} align="center">No pledges yet!</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
