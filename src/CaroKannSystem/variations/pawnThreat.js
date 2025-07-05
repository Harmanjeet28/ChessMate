// variations/pawnThreat.js
const pawnThreat = {
    'Pawn Threat': [
      { fen: 'start', arrow: null, explanation: '' },
      {
        fen: 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
        arrow: { from: 'c7', to: 'c6' },

      },
      {
        fen: 'rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
        arrow: { from: 'd7', to: 'd5' },
        
      },
      {
        fen: 'rnbqkb1r/ppp1pppp/5n2/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
        arrow: { from: 'c7', to: 'c6' },
        
      },
      {
        fen: 'rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 1',
        arrow: { from: 'c7', to: 'c6' },
        
      },
      {
        fen: 'rnbqkb1r/ppp2ppp/5n2/3p4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 1',
        arrow: { from: 'c7', to: 'c6' },
        
      },
    ],
  };
  
  export default pawnThreat;
  