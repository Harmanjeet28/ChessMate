// variations/MainLine.js
const mainLine = {
    'Main Line': [
      { fen: 'start', arrow: null, explanation: '' },
      {
        fen: 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
        arrow: { from: 'c7', to: 'c6' },
        explanation: 'e7–c6: Prepares to support ...d5 without blocking the c8-bishop, aiming for a solid, flexible pawn structure.',
      },
      {
        fen: 'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 1',
        arrow: { from: 'd7', to: 'd5' },
        explanation: "d7–d5: Challenges White's central control and seeks equal central space.",
      },
      {
        fen: 'rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 1',
        arrow: { from: 'c7', to: 'f5' },
        explanation: 'Bf5: Develops the light-squared bishop before playing ...e6, so it doesn’t get trapped behind the pawn chain.',
      },
      {
        fen: 'rn1qkbnr/pp3ppp/2p1p3/3pPb2/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 1',
        arrow: { from: 'e7', to: 'e6' },
        explanation: 'e7–e6: Solidifies the center, reinforces d5, and prepares to develop the dark-squared bishop.',
      },
    ],
  };
  
  export default mainLine;
  