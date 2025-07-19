import React, { useRef, useState } from 'react';
import HeroSection from './components/HeroSection';
import KPIs from './components/KPI';
import Impact from './components/Impact';
import PledgeForm from './components/PledgeForm';
import Certificate from './components/Certificate';
import PledgeWall from './components/PledgeWall';
import PrivacyNote from './components/PrivacyNote';
import mockPledges from './mockPledges';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import { CssBaseline, Container, Box, Typography } from '@mui/material';

function App() {
  const [pledges, setPledges] = useState(mockPledges);
  const [certificate, setCertificate] = useState(null);
  const formRef = useRef(null);

  const handlePledgeClick = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (data) => {
    const stars = Math.min(3, data.commitments.length);
    const newPledge = {
      id: `P${String(1000 + pledges.length + 1).slice(-3)}`,
      name: data.name,
      date: format(new Date(), 'yyyy-MM-dd'),
      state: data.state,
      profile: data.profile,
      stars,
      commitments: data.commitments
    };
    setPledges(p => [newPledge, ...p]);
    setCertificate({ name: data.name, stars });
  };

  const closeCertificate = () => setCertificate(null);

  return (
    <>
      <CssBaseline />
      <HeroSection onPledgeClick={handlePledgeClick} />
      <Container>
        <KPIs pledges={pledges} />
        <Impact />
        <div ref={formRef} />
        <PledgeForm onSubmit={handleFormSubmit} />
        {certificate && (
          <Certificate name={certificate.name} stars={certificate.stars} onClose={closeCertificate} />
        )}
        <PledgeWall pledges={pledges} />
        <PrivacyNote />
        <Box sx={{ textAlign: 'center', mt: 5, mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} Climate Action Pledge | Internship Project Demo
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default App;
