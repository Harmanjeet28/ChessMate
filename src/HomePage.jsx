import React from 'react';
import { Box, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import OpeningSection from './components/OpeningSection';
import OpeningInfo from './components/OpeningInfo';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh' }}>
      <Navbar />
      <Header />

      {/* LONDON SYSTEM (White) - Banner Left, Info Right */}
      <Box
        sx={{
          px: 5,
          py: 8,
          display: 'flex',
          gap: 4,
          alignItems: 'flex-start',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box sx={{ flex: '1 1 50%', maxWidth: { xs: '100%', md: '50%' } }}>
          <OpeningSection
            title="♙ White Opening: London System"
            description="The London System is a solid opening strategy for White focused on quick development, strong central control, and early king safety. It avoids long theory lines, making it perfect for club players and pros alike."
            buttonText="Learn London"
            dark={false}
            slideDirection="left"
            onButtonClick={() => navigate('/london-system')}
          />
        </Box>
        <Box sx={{ flex: '1 1 50%', maxWidth: { xs: '100%', md: '50%' } }}>
          <OpeningInfo
            title="📚 History, Strategy & Notable Games"
            infoList={[
              'Developed in the late 1800s, it became prominent after the 1920s.',
              'Focuses on quick bishop fianchetto to f4, early castling, and long-term plans.',
              'Popular among modern GMs like Magnus Carlsen, Gata Kamsky, and Levon Aronian.',
              'Famous Games: Carlsen vs. Aronian (London Classic 2012), Kamsky vs. Shulman (2008).',
            ]}
          />
        </Box>
      </Box>

      <Divider variant="middle" sx={{ my: 6 }} />

      {/* CARO-KANN DEFENSE (Black) - Info Left, Banner Right */}
      <Box
        sx={{
          px: 5,
          py: 8,
          display: 'flex',
          gap: 4,
          alignItems: 'flex-start',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box sx={{ flex: '1 1 50%', maxWidth: { xs: '100%', md: '50%' } }}>
          <OpeningInfo
            title="📚 History, Strategy & Notable Games"
            infoList={[
              'Named after Horatio Caro and Marcus Kann (1886), refined by Karpov in the 70s.',
              'Focuses on solid pawn structure, minimizing weaknesses, and long-term planning.',
              'Played by champions like Anatoly Karpov, Vishwanathan Anand, and Fabiano Caruana.',
              'Famous Games: Anand vs. Topalov (WCC 2010), Karpov vs. Kasparov (1985 match).',
            ]}
          />
        </Box>
        <Box sx={{ flex: '1 1 50%', maxWidth: { xs: '100%', md: '50%' } }}>
          <OpeningSection
            title="♞ Black Opening: Caro-Kann Defense"
            description="The Caro-Kann is a time-tested response to 1.e4, offering Black a solid and counterattacking structure. It emphasizes piece coordination and strategic depth over tactics."
            buttonText="Learn Caro-Kann"
            dark={true}
            slideDirection="right"
            onButtonClick={() => navigate('/caro-kann')}
          />
        </Box>
      </Box>
    </Box>
  );
}
