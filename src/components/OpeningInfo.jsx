import { motion } from 'framer-motion';
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const revealVariants = {
  hidden: { opacity: 0, y: 20 },   // start slightly below, invisible
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function OpeningInfo({ title, infoList }) {
  return (
    <Box>
      {title && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          style={{ overflow: 'hidden' }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 'bold', letterSpacing: 0.5 }}
          >
            {title}
          </Typography>
        </motion.div>
      )}
      <List>
        {infoList.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText primary={`• ${item}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
