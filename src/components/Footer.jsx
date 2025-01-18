import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', paddingBottom: "20px", width: "100vw", marginTop: "80px", marginLeft: "-8px", marginBottom: "-10px" }}>
      <Container maxWidth="100vw">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom sx={{ textAlign: "center" }}>
                Designed and Coded with ❤️<br /> &ensp; &nbsp; ― by Divyshekhar Sinha 
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              &copy; {new Date().getFullYear()} All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
