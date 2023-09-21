import React from 'react';
import { Avatar, Box, Container, CssBaseline, Typography, Button } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';
import CustomButton from './common-components/customButton';

export default function CandidatesProfile() {
    const { state } = useLocation();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '100vh',
                padding: '16px',
            }}
        >
            <CssBaseline />
            <Container component="main" sx={{ mt: 4, mb: 2 }}>
                <Avatar
                    src={state.details.avatar}
                    alt={state.details.first_name}
                    sx={{
                        width: 96,
                        height: 96,
                        mb: 2,
                    }}
                />
                <Typography variant="h5" gutterBottom sx={{ color: '#e71618 ' }}>
                    {state.details.first_name} {state.details.last_name}
                </Typography>
                <Typography variant="body1">Email: {state.details.email}</Typography>
                <Typography variant="body1">Gender: {state.details.gender}</Typography>
                <Typography variant="body1">Job Description: {state.details.job_description}</Typography>
                <Typography variant="body1">Job Title: {state.details.job_title}</Typography>

                <Box>
                    <Link to="/candidates">
                        <CustomButton text=' Back to the list of candidates' />
                    </Link>
                </Box>

            </Container>
        </Box>
    );
}