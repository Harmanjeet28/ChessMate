import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Chessboard } from 'react-chessboard';

export default function LondonSystem() {
  const [position, setPosition] = useState('start');
  const [arrows, setArrows] = useState([]);
  const [moveIndex, setMoveIndex] = useState(0);
  const [description, setDescription] = useState('');

  const moveSequence = [
    { fen: 'start', arrow: null, explanation: '' },
    {
      fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq d3 0 1',
      arrow: { from: 'd2', to: 'd4' },
      explanation: '1. d4: A strong central pawn thrust...',
    },
    {
      fen: 'rnbqkbnr/pppppppp/8/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 1 1',
      arrow: { from: 'g1', to: 'f3' },
      explanation: '2. Nf3: A natural development move...',
    },
    {
      fen: 'rnbqkbnr/pppppppp/8/8/3P1B2/5N2/PPP1PPPP/RN1QKB1R w KQkq - 2 1',
      arrow: { from: 'c1', to: 'f4' },
      explanation: '3. Bf4: London’s signature move...',
    },
    {
      fen: 'rnbqkbnr/pppppppp/8/8/3P1B2/4PN2/PPP2PPP/RN1QKB1R w KQkq - 0 1',
      arrow: { from: 'e2', to: 'e3' },
      explanation: '4. e3: This solidifies the center...',
    },
    {
      fen: 'rnbqkbnr/pppppppp/8/8/3P1B2/2P1PN2/PP3PPP/RN1QKB1R w KQkq - 0 1',
      arrow: { from: 'c2', to: 'c3' },
      explanation: '5. c3: Reinforces the d4 pawn...',
    },
    {
      fen: 'rnbqkbnr/pppppppp/8/8/3P1B2/2PBPN2/PP3PPP/RN1QK2R w KQkq - 0 1',
      arrow: { from: 'f1', to: 'd3' },
      explanation: '6. Bd3: This bishop harmonizes...',
    },
    {
      fen: 'rnbqkbnr/pppppppp/8/8/3P1B2/2PBPN2/PP1N1PPP/R2QK2R w KQkq - 0 1',
      arrow: { from: 'b1', to: 'd2' },
      explanation: '7. Nbd2: Supports central control...',
    },
    {
      fen: 'rnbqkbnr/pppppppp/8/8/3P1B2/2PBPN2/PP1N1PPP/R2Q1RK1 w Qkq - 0 1',
      arrow: { from: 'e1', to: 'g1' },
      explanation: '8. O-O: Kingside castling...',
    },
  ];

  const handleNextMove = () => {
    if (moveIndex + 1 < moveSequence.length) {
      const next = moveSequence[moveIndex + 1];
      setPosition(next.fen);
      setDescription(next.explanation);
      setArrows(next.arrow ? [{ ...next.arrow, color: 'green' }] : []);
      setMoveIndex(moveIndex + 1);
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: 'auto' }}>
      {/* Title */}
      <Box sx={{ mb: 3, textAlign: 'left' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          London System Opening
        </Typography>
        <Typography>
          Step-by-step demo of the London System. Click "Next Move" to learn each move.
        </Typography>
      </Box>

      {/* Responsive Layout */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
          gap: 4,
        }}
      >
        {/* Chessboard */}
        <Box sx={{ width: { xs: '100%', sm: 400, md: 600 } }}>
          <Chessboard
            position={position}
            boardArrows={arrows}
            arePiecesDraggable={false}
            boardWidth={typeof window !== 'undefined' && window.innerWidth < 600 ? 320 : 600}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3, mx: 'auto', display: 'block' }}
            onClick={handleNextMove}
            disabled={moveIndex >= moveSequence.length - 1}
          >
            Next Move
          </Button>
        </Box>

        {/* Explanation Box */}
        <Box
          sx={{
            maxWidth: 350,
            textAlign: 'left',
            mt: { xs: 3, md: 2 },
            visibility: description ? 'visible' : 'hidden',
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Explanation
          </Typography>
          <Typography>{description}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
