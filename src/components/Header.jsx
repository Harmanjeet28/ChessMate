import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const fadePopIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Header() {
  return (
    <Box sx={{ textAlign: 'center', pt: 8 }}>
      <motion.div initial="hidden" animate="visible" variants={fadePopIn}>
        <Typography variant="h2" gutterBottom>
          ♟️ ChessMate
        </Typography>
        <Typography variant="h5" gutterBottom>
          Master openings with ease — for both White and Black.
        </Typography>
      </motion.div>
    </Box>
  );
}
