import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Chessboard } from 'react-chessboard';

import mainLine from './variations/MainLine';
import SpaceDisadvantage from './variations/SpaceDisadvantage';
import easyPlay from './variations/easyPlay';
import AdvanceLine from './variations/AdvanceLine';
import standardPlay from './variations/standardPlay';
import pawnThreat from './variations/pawnThreat';
import fianchettoInCarroKhann from './variations/fianchettoInCarroKhann';
import knightVariation from './variations/knightVariation';
import fantasyVariation from './variations/fantasyVariation';
import checkmateIdea from './variations/checkmateIdea';

export default function CaroKannSystem() {
  const [position, setPosition] = useState('start');
  const [arrows, setArrows] = useState([]);
  const [moveIndex, setMoveIndex] = useState(0);
  const [description, setDescription] = useState('');
  const [currentVariation, setCurrentVariation] = useState(null);

  const isMobile = useMediaQuery('(max-width: 768px)');

  const variations = {
    'First when the pawn is pushin from white': {
      ...mainLine,
      ...SpaceDisadvantage,
      ...easyPlay,
    },
    'Pawn Moves forward instead of capture': {
      ...AdvanceLine,
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
        p: isMobile ? 2 : 4,
        maxWidth: 1400,
        margin: 'auto',
        backgroundColor: '#1c1624',
        minHeight: '100vh',
        color: 'white',
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
        Caro-Kann Defense Explorer
      </Typography>

      <Typography sx={{ mb: 4, textAlign: 'center' }}>
        Select a variation line on the left to see Caro-Kann play styles in action.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 4,
        }}
      >
        {/* Accordion Menu */}
        <Box sx={{ minWidth: isMobile ? '100%' : 280 }}>
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

        {/* Board + Explanation */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: 4,
            width: '100%',
            justifyContent: 'center',
            alignItems: isMobile ? 'center' : 'flex-start',
          }}
        >
          {/* Chessboard */}
          <Box>
            <Chessboard
              position={position}
              boardArrows={arrows}
              arePiecesDraggable={false}
              boardWidth={isMobile ? 320 : 600}
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

          {/* Explanation Box */}
          <Box
            sx={{
              width: isMobile ? '90%' : 350,
              minHeight: 200,
              mt: 2,
              textAlign: 'left',
              visibility: description ? 'visible' : 'hidden',
              backgroundColor: '#2a2040',
              p: 2,
              borderRadius: 2,
              boxShadow: '0 0 10px rgba(255,255,255,0.1)',
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
