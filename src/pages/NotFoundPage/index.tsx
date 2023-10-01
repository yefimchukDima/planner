import React from 'react';
import { Container, Typography, Button, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
}));

/**
 * NotFoundPage component renders a 404 error page. This is used when
 * the user navigates to a route that doesn't exist in the application.
 *
 * @component
 * @returns {React.ReactNode} Returns the 404 error page component.
 */
const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container component="main" maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <StyledPaper>
          <Typography variant="h1" component="h2" gutterBottom color="error">
            {t('errorCode')}
          </Typography>
          <Typography variant="h5">{t('errorDescription')}</Typography>
          <Box mt={3}>
            <Button variant="contained" color="primary" component={Link} to="/">
              {t('goToHomepage')}
            </Button>
          </Box>
        </StyledPaper>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
