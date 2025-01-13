import { Box, Grid, Typography } from "@mui/material";
import PropTypes from 'prop-types';
function About({darkTheme}){
  return (
    <Box 
        display={"flex"}
        marginTop={'60px'}
        justifyContent={"center"}
        sx={{ p: "20px", 
            color: darkTheme ? 'rgb(177, 215, 233)' : 'rgb(37,38,69)'

        }}>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Typography sx={{ fontSize: '20px' }}>
                    This is the about left section
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography sx={{ fontSize: '20px' }}>
                    This is the about right section
                </Typography>
            </Grid>

        </Grid>
    </Box>
  );
}
About.propTypes={
    darkTheme:PropTypes.bool.isRequired
};

export default About;