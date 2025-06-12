import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Chessboard } from 'react-chessboard';

export default function LondonSystem() {
  const [position, setPosition] = useState('start');
  const [arrows, setArrows] = useState([]);
  const [moveIndex, setMoveIndex] = useState(0);
  const [description, setDescription] = useState('');



  // Predefined FEN after each white move (black does not move)
  // Website for check moves:
  //https://lichess.org/editor/rnbqkbnr/pppppppp/8/8/3P1B2/2PBPN2/PP1N1PPP/R2QK2R_w_KQkq_-_0_1?color=white
  const moveSequence = [
    {
      fen: 'start',
      arrow: null,
      explanation: '',
    },
    {
      fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq d3 0 1',
      arrow: { from: 'd2', to: 'd4' },
      explanation:
        '1. d4: A strong central pawn thrust. It grabs space, controls e5 and c5, and is the hallmark first move of the London System.',
    },
    {
      fen: 'rnbqkbnr/pppppppp/8/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 1 1',
      arrow: { from: 'g1', to: 'f3' },
      explanation:
        '2. Nf3: A natural development move. The knight defends d4 and helps prepare castling kingside for king safety.',
    },
    {
      fen: 'rnbqkbnr/pppppppp/8/8/3P1B2/5N2/PPP1PPPP/RN1QKB1R w KQkq - 2 1',
      arrow: { from: 'c1', to: 'f4' },
      explanation:
        '3. Bf4: London’s signature move. The bishop exits early before the pawn wall closes, targeting the e5 square and exerting queenside pressure.',
    },
    {
      fen: 'rnbqkbnr/pppppppp/8/8/3P1B2/4PN2/PPP2PPP/RN1QKB1R w KQkq - 0 1',
      arrow: { from: 'e2', to: 'e3' },
      explanation:
        '4. e3: This solidifies the center, supports the d4 pawn, and opens the diagonal for the light-squared bishop to develop.',
    },
    {
      fen: 'rnbqkbnr/pppppppp/8/8/3P1B2/2P1PN2/PP3PPP/RN1QKB1R w KQkq - 0 1',
      arrow: { from: 'c2', to: 'c3' },
      explanation:
        '5. c3: Reinforces the d4 pawn and creates a durable pawn triangle — a key structure in London setups that makes it very hard to break.',
    },
    {
      fen: 'rnbqkbnr/pppppppp/8/8/3P1B2/2PBPN2/PP3PPP/RN1QK2R w KQkq - 0 1',
      arrow: { from: 'f1', to: 'd3' },
      explanation:
        '6. Bd3: This bishop harmonizes with the one on f4, adds pressure to the kingside, and eyes the h7 weakness — great for future attacking chances.',
    },
    {
      fen: 'rnbqkbnr/pppppppp/8/8/3P1B2/2PBPN2/PP1N1PPP/R2QK2R w KQkq - 0 1',
      arrow: { from: 'b1', to: 'd2' },
      explanation:
        '7. Nbd2: Supports central control, frees the c1 square for future rook lifts or queen moves, and gets ready for flexible transitions into the middlegame.',
    },
    {
      fen: 'rnbqkbnr/pppppppp/8/8/3P1B2/2PBPN2/PP1N1PPP/R2Q1RK1 w Qkq - 0 1',
      arrow: { from: 'e1', to: 'g1' },
      explanation:
        '8. O-O: Kingside castling gets your king safe and links your rooks — your development is complete and you’re ready for action!',
    },
  ];

  const handleNextMove = () => {
    if (moveIndex + 1 < moveSequence.length) {
      const next = moveSequence[moveIndex + 1];
      setPosition(next.fen);
      setDescription(next.explanation);
      if (next.arrow) {
        setArrows([{ ...next.arrow, color: 'green' }]);
      } else {
        setArrows([]);
      }
      setMoveIndex(moveIndex + 1);
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: 1000, margin: 'auto' }}>
      {/* Title and subtitle */}
      <Box sx={{ mb: 3, textAlign: 'left' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          London System Opening
        </Typography>
        <Typography>
          Step-by-step demo of the London System. Click "Next Move" to learn each move.
        </Typography>
      </Box>

      {/* Main content: board and explanation */}
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start', justifyContent: 'center' }}>
        {/* Larger chessboard */}
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
            sx={{ mt: 3, display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            onClick={handleNextMove}
            disabled={moveIndex >= moveSequence.length - 1}
          >
            Next Move
          </Button>
        </Box>

        {/* Explanation — only render if description exists */}
        {description && (
          <Box sx={{ maxWidth: 300, textAlign: 'left', mt: 2 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Explanation
            </Typography>
            <Typography>{description}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
