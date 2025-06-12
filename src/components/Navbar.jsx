import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

export default function Navbar() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#121212' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          sx={{ cursor: 'pointer', color: '#fff' }}
          onClick={() => navigate('/')}
        >
          ChessMate
        </Typography>
        {user ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body1" sx={{ color: '#fff' }}>
              Hello, {user.displayName || user.email}
            </Typography>
            <Button sx={{ color: '#fff' }} onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        ) : (
          <Box>
            <Button sx={{ color: '#fff', mr: 2 }} onClick={() => navigate('/signin')}>
              Sign In
            </Button>
            <Button sx={{ color: '#fff' }} onClick={() => navigate('/signup')}>
              Sign Up
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
