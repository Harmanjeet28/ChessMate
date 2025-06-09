import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', paddingTop: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" gutterBottom>
          ♟️ Welcome to ChessMate
        </Typography>
        <Typography variant="h5" gutterBottom>
          Learn chess openings easily and effectively
        </Typography>

        <Box sx={{ marginTop: 6 }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/signin"
            sx={{ m: 1 }}
          >
            Sign In
          </Button>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/signup"
            sx={{ m: 1 }}
          >
            Sign Up
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
}
