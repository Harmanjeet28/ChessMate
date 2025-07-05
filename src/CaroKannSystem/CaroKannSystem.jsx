import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Chessboard } from 'react-chessboard';


import mainLine from './variations/MainLine';
import spaceDisadvantage from './variations/spaceDisadvantage';
import easyPlay from './variations/easyPlay'
import advanceLine from './variations/advanceLine'
import standardPlay from './variations/standardPlay'
import pawnThreat from './variations/pawnThreat'
import fianchettoInCarroKhann from './variations/fianchettoInCarroKhann'
import knightVariation from './variations/knightVariation'
import fantasyVariation from './variations/fantasyVariation'
import checkmateIdea from './variations/checkmateIdea'



export default function CaroKannSystem() {
  const [position, setPosition] = useState('start');
  const [arrows, setArrows] = useState([]);
  const [moveIndex, setMoveIndex] = useState(0);
  const [description, setDescription] = useState('');
  const [currentVariation, setCurrentVariation] = useState(null);

  const variations = {
    'First when the pawn is pushin from white': {
      ...mainLine,
      ...spaceDisadvantage,
      ...easyPlay
    },
    'Pawn Moves forward instead of capture': {
      ...advanceLine,
    },
    'Exchnage Variation': {
      ...standardPlay,
      ...pawnThreat,
      ...fianchettoInCarroKhann,
    },
    'Pawn Left For Capture': {
      ...knightVariation,
      ...fantasyVariation,
    },
    'Standard Gameplay': {
      ...checkmateIdea,
    },
    // Add more accordion categories here
  };

  const handleVariationSelect = (title, option) => {
    setCurrentVariation({ title, option });
    setMoveIndex(0);
    const selected = variations[title][option];
    setPosition(selected[0].fen);
    setDescription('');
    setArrows([]);
  };

  const moveSequence = currentVariation
    ? variations[currentVariation.title][currentVariation.option]
    : [];

  const handleNextMove = () => {
    if (currentVariation && moveIndex + 1 < moveSequence.length) {
      const next = moveSequence[moveIndex + 1];
      setPosition(next.fen);
      setDescription(next.explanation);
      setArrows(next.arrow ? [{ ...next.arrow, color: 'green' }] : []);
      setMoveIndex(moveIndex + 1);
    }
  };

  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 1400,
        margin: 'auto',
        backgroundColor: '#1c1624',
        minHeight: '100vh',
        color: 'white',
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Caro-Kann Defense Explorer
      </Typography>
      <Typography sx={{ mb: 4 }}>
        Select a variation line on the left to see Caro-Kann play styles in action.
      </Typography>

      <Box sx={{ display: 'flex', gap: 4 }}>
        {/* Left-hand variation menu */}
        <Box sx={{ minWidth: 280 }}>
          {Object.entries(variations).map(([title, options]) => (
            <Accordion
              key={title}
              sx={{
                backgroundColor: '#2c1e3d',
                color: '#ffffff',
                border: '1px solid #4b3b5a',
                borderRadius: '6px',
                mb: 2,
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#b39ddb' }} />}
                sx={{
                  backgroundColor: '#3b2c4a',
                  '& .MuiTypography-root': {
                    fontWeight: 'bold',
                    color: '#e0d7f8',
                  },
                }}
              >
                <Typography>{title}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: '#2c1e3d' }}>
                {Object.keys(options).map((option) => (
                  <Button
                    key={option}
                    variant={
                      currentVariation &&
                      currentVariation.title === title &&
                      currentVariation.option === option
                        ? 'contained'
                        : 'outlined'
                    }
                    fullWidth
                    sx={{
                      mb: 1,
                      color: '#e0d7f8',
                      borderColor: '#9575cd',
                      backgroundColor:
                        currentVariation &&
                        currentVariation.title === title &&
                        currentVariation.option === option
                          ? '#7e57c2'
                          : 'transparent',
                      '&:hover': {
                        backgroundColor: '#5e35b1',
                        borderColor: '#b39ddb',
                      },
                    }}
                    onClick={() => handleVariationSelect(title, option)}
                  >
                    {option}
                  </Button>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Chessboard and explanation side-by-side */}
        <Box sx={{ display: 'flex', gap: 4 }}>
          {/* Chessboard */}
          <Box>
            <Chessboard
              position={position}
              boardArrows={arrows}
              arePiecesDraggable={false}
              boardWidth={600}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3, mx: 'auto', display: 'block' }}
              onClick={handleNextMove}
              disabled={
                !currentVariation || moveIndex >= moveSequence.length - 1
              }
            >
              Next Move
            </Button>
          </Box>

          {/* Static explanation box with reserved space */}
          <Box
            sx={{
              width: 350,
              minHeight: 200,
              textAlign: 'left',
              mt: 2,
              visibility: description ? 'visible' : 'hidden',
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Explanation
            </Typography>
            <Typography>{description || ' '}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
