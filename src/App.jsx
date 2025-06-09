import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', paddingTop: 5 }}>
      <Typography variant="h3" gutterBottom>
        ♟️ Welcome to ChessMate
      </Typography>
      <Typography variant="h6" gutterBottom>
        Learn chess openings easily and effectively
      </Typography>

      <Box sx={{ marginTop: 4 }}>
        <Button variant="contained" color="primary" sx={{ m: 1 }}>
          London System
        </Button>
        <Button variant="contained" color="secondary" sx={{ m: 1 }}>
          Caro-Kann Defense
        </Button>
      </Box>
    </Container>
  );
}

export default App;

