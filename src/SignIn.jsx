import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase'; // Adjust path if needed

export default function SignIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    console.log('Submitting Sign In form:', form);

    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      alert('Sign in successful!');
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Sign In
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          value={form.email}
          onChange={handleChange}
          required
          sx={{
            input: { color: '#fff', backgroundColor: '#1e1e2f' },
            label: { color: '#ccc' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#4dd0e1',
              },
              '&:hover fieldset': {
                borderColor: '#00bcd4',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#00ffff',
                boxShadow: '0 0 5px #00ffff',
              },
            },
          }}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          value={form.password}
          onChange={handleChange}
          required
          sx={{
            input: { color: '#fff', backgroundColor: '#1e1e2f' },
            label: { color: '#ccc' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#4dd0e1',
              },
              '&:hover fieldset': {
                borderColor: '#00bcd4',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#00ffff',
                boxShadow: '0 0 5px #00ffff',
              },
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Sign In
        </Button>
      </Box>

      <Typography align="center" sx={{ mt: 2 }}>
        Don't have an account?{' '}
        <Button variant="text" onClick={() => navigate('/signup')}>
          Sign Up
        </Button>
      </Typography>
    </Container>
  );
}
