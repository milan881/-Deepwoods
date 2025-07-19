import React, { useState } from 'react';
import {
  Box, TextField, Button, MenuItem, Typography, FormControl, FormGroup, FormControlLabel, Checkbox, Paper, Select, InputLabel
} from '@mui/material';

const commitmentThemes = [
  {
    theme: 'Daily Life',
    options: [
      'Save electricity',
      'Reduce water use',
      'Recycle waste'
    ]
  },
  {
    theme: 'Travel & Commute',
    options: [
      'Use public transport',
      'Cycle or walk',
      'Carpool with others'
    ]
  },
  {
    theme: 'Consumption',
    options: [
      'Buy local products',
      'Reduce meat consumption',
      'Avoid single-use plastics'
    ]
  }
];

export default function PledgeForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    state: '',
    profile: '',
    commitments: []
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleCommitmentChange = (e) => {
    const { value, checked } = e.target;
    setForm(f => ({
      ...f,
      commitments: checked
        ? [...f.commitments, value]
        : f.commitments.filter(c => c !== value)
    }));
  };

  const validate = () => {
    let err = {};
    if (!form.name.trim()) err.name = 'Name required';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Valid email required';
    if (!form.mobile.trim() || !/^\d{10,}$/.test(form.mobile)) err.mobile = 'Valid mobile number required';
    if (!form.profile) err.profile = 'Profile required';
    if (form.commitments.length === 0) err.commitments = 'Select at least 1 commitment';
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        onSubmit(form);
        setForm({ name: '', email: '', mobile: '', state: '', profile: '', commitments: [] });
        setSubmitting(false);
      }, 700);
    }
  };

  return (
    <Paper elevation={4} sx={{ p: 3, mb: 3, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Climate Action Pledge Form
      </Typography>
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          fullWidth
          sx={{ mb: 2 }}
          required
        />
        <TextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
          sx={{ mb: 2 }}
          required
        />
        <TextField
          label="Mobile Number"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          error={!!errors.mobile}
          helperText={errors.mobile}
          fullWidth
          sx={{ mb: 2 }}
          required
        />
        <TextField
          label="State"
          name="state"
          value={form.state}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="profile-type-label">Profile Type</InputLabel>
          <Select
            labelId="profile-type-label"
            name="profile"
            value={form.profile}
            label="Profile Type"
            onChange={handleChange}
            required
            error={!!errors.profile}
          >
            <MenuItem value="Student">Student</MenuItem>
            <MenuItem value="Working Professional">Working Professional</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
          {errors.profile && (
            <Typography color="error" variant="caption">{errors.profile}</Typography>
          )}
        </FormControl>
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ fontWeight: 500 }}>Commitments (choose at least 1):</Typography>
          {commitmentThemes.map((theme, i) => (
            <Box key={theme.theme} sx={{ ml: 1, mb: 1 }}>
              <Typography sx={{ fontSize: 14, fontWeight: 500 }}>{theme.theme}:</Typography>
              <FormGroup row>
                {theme.options.map(option => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={form.commitments.includes(option)}
                        onChange={handleCommitmentChange}
                        value={option}
                      />
                    }
                    label={option}
                  />
                ))}
              </FormGroup>
            </Box>
          ))}
          {errors.commitments && (
            <Typography color="error" variant="caption">{errors.commitments}</Typography>
          )}
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="success"
          fullWidth
          disabled={submitting}
        >
          {submitting ? 'Submitting...' : 'Submit & Get Certificate'}
        </Button>
        <Box sx={{ mt: 2 }}>
          <Typography color="text.secondary" variant="body2">
            <strong>Privacy Note:</strong> Mobile Number and Email are required for validation but never shown publicly. Data is used only for verification and engagement.
          </Typography>
        </Box>
      </form>
    </Paper>
  );
}
