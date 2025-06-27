// variations/easyPlay.js
const easyPlay = {
    'Easy Play': [
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
        fen: 'rnbqkbnr/pp2pppp/8/2ppP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 1',
        arrow: { from: 'd7', to: 'd5' },
        explanation: 'Black exchanges on e4 and maintains a solid center.',
      },
      {
        fen: 'r1bqkbnr/pp2pppp/2n5/2PpP3/8/8/PPP2PPP/RNBQKBNR w KQkq - 0 1',
        arrow: { from: 'd7', to: 'd5' },
        explanation: 'Black plays e6 to develop dark-square bishop.',
      },
      {
        fen: 'r2qkbnr/pp2pppp/2n5/2PpP3/6b1/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 1',
        arrow: { from: 'd7', to: 'd5' },
        explanation: 'Black plays e6 to develop dark-square bishop.',
      },
      {
        fen: 'r2qkbnr/pp3ppp/2n1p3/2PpP3/6b1/5N2/PPP1BPPP/RNBQK2R w KQkq - 0 1',
        arrow: { from: 'd7', to: 'd5' },
        explanation: 'Black plays e6 to develop dark-square bishop.',
      },
      {
        fen: 'r2qkb1r/pp2nppp/2n1p3/2PpP3/6b1/4BN2/PPP1BPPP/RN1QK2R w KQkq - 0 1',
        arrow: { from: 'd7', to: 'd5' },
        explanation: 'Black plays e6 to develop dark-square bishop.',
      },
      {
        fen: 'r2qkb1r/pp3ppp/2n1p3/2PpPn2/6b1/4BN2/PPP1BPPP/RN1Q1RK1 w Qkq - 0 1',
        arrow: { from: 'd7', to: 'd5' },
        explanation: 'Black plays e6 to develop dark-square bishop.',
      },
    ],
  };
  
  export default easyPlay;
  