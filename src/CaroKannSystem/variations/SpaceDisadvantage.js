const spaceDisadvantage = {
    'Space Disadvantage': [
      { fen: 'start', arrow: null, explanation: '' },
      {
        fen: 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
        arrow: { from: 'c7', to: 'c6' },
        explanation: 'Prepares ...d5 and builds a solid structure. While it supports central play, it slightly reduces queenside space and blocks the c6-square from the knight temporarily.',
      },
      {
        fen: 'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 1',
        arrow: { from: 'd7', to: 'd5' },
        explanation: "Challenges White's center directly. It's a strong claim for central balance, but after White plays e5, Black starts to feel squeezed as the central space tilts heavily in White's favor.",
      },
      {
        fen: 'rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 1',
        arrow: { from: 'd7', to: 'd5' },
        explanation: "An important move to get the bishop out before e6 shuts it in. This is one of Black's few free, active moves early on and helps relieve pressure — temporarily.",
      },
      {
        fen: 'rn1qkbnr/pp3ppp/2p1p3/3pPb2/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 1',
        arrow: { from: 'd7', to: 'd5' },
        explanation: "Now the space disadvantage becomes more clear. This move supports d5 but locks in the bishop on c8 (if not already moved) and closes off Black's central structure. Meanwhile, White controls more space with pawns on e5 and d4, restricting Black’s knights and leaving little room to maneuver.",
      },
      {
        fen: 'rn1qkbnr/pp3ppp/4p3/2ppPb2/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 0 1',
        arrow: { from: 'd7', to: 'd5' },
        explanation: "An attempt to counterattack White’s center and gain space on the queenside. However, it doesn't solve the cramped center and can leave Black with weaknesses (like a backward d6 pawn if the center opens).",
      },
      {
        fen: 'r2qkbnr/pp3ppp/2n1p3/2ppPb2/3P4/2P2N2/PP2BPPP/RNBQK2R w KQkq - 0 1',
        arrow: { from: 'd7', to: 'd5' },
        explanation: "Develops a piece and pressures d4, but doesn’t expand space. At this stage, White has a large central presence and better development. Black's pieces are somewhat boxed in, and one inaccurate move can lead to long-term positional difficulties.",
      },
      {
        fen: 'r2qkbnr/pp3ppp/2n1p3/2ppPb2/3P4/2P2N2/PP2BPPP/RNBQ1RK1 w HQkq - 0 1',
        arrow: { from: 'd7', to: 'd5' },
        explanation: "White just castles, solidfying it's positioning.",
      },

    ]
  };
  
  export default spaceDisadvantage;
  