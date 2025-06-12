import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

export default function OpeningSection({ title, description, buttonText, dark, slideDirection, onButtonClick }) {
  const variant = {
    hidden: { opacity: 0, x: slideDirection === 'left' ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variant}
      whileHover={{ scale: 1.03 }}
    >
      <Box
        sx={{
          backgroundColor: dark ? '#2b2b2b' : '#ffffff',
          color: dark ? 'white' : '#000',
          borderRadius: 4,
          p: 5,
          boxShadow: 3,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: dark ? '#3a3a3a' : '#f5f5f5',
            boxShadow: 6,
          },
        }}
      >
        <Typography variant="h4" gutterBottom>{title}</Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>{description}</Typography>
        <Button variant="contained" color={dark ? 'secondary' : 'primary'} onClick={onButtonClick}>
          {buttonText}
        </Button>
      </Box>
    </motion.div>
  );
}
