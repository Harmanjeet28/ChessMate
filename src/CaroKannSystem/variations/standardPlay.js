// variations/standardPlay.js
const standardPlay = {
    'Standard Play': [
      { fen: 'start', arrow: null, explanation: '' },
      {
        fen: 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
        arrow: { from: 'c7', to: 'c6' },
        explanation: '1... c6 prepares d5, the foundation of Caro-Kann.',
      },
      {
        fen: 'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 1',
        arrow: { from: 'd7', to: 'd5' },
        explanation: '2... d5 strikes the center immediately.',
      },
      {
        fen: 'GWOB',
        arrow: { from: 'c7', to: 'c6' },
        explanation: '1... c6 prepares d5, the foundation of Caro-Kann.',
      },
    ],
  };
  
  export default standardPlay;
  