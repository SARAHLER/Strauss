
import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Button, Box, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCandidates } from '../redux/reducers/candidatesActions';
import CustomButton from './common-components/customButton'
export default function CandidatesList() {
  const candidates = useSelector((state) => state.candidates.candidates);
  const loading = useSelector((state) => state.candidates.loading);
  const [message, setMessage] = useState('loading');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchCandidates(dispatch));
      } catch (error) {
        setMessage('Expired, please log in again')
        setTimeout(() => {
          navigate(`/`);
        }, 3000);
      }
    };
    fetchData();
  }, [dispatch, navigate]);

  const handleButtonClick = (details) => {
    navigate(`/candidatesProfile`, { state: { details } });
  };

  return (
    <Container>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h4" gutterBottom>
          List of candidates
        </Typography>
        {loading ? (
          <Box>{message}</Box>
        ) : (
          <Grid container spacing={2}>
            {candidates.map((candidate) => (
              <Grid item xs={12} lg={3} sm={4} display="flex" alignItems="stretch" key={candidate.id}>
                <Card sx={{ p: 0, width: '100%' }}>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                    }}
                  >
                    <img src={candidate?.avatar} alt="img" width="50%" />
                  </Box>

                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="caption">{`${candidate?.first_name} ${candidate?.last_name}`}</Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      sx={{
                        mt: '15px',
                      }}
                    >
                      <Typography variant="h5" sx={{ mr: 'auto' }}>
                        {candidate?.job_title}
                      </Typography>

                    </Box>

                    <CustomButton text='Full details' func={() => handleButtonClick(candidate)}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
}