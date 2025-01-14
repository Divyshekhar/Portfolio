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
                Hi! I'm Divyshekhar Sinha, a Computer Science Engineer currently in my third year at KIIT University. 
                My expertise lies in web development and problem-solving, where I enjoy creating innovative solutions and enhancing user experiences.
                I have a strong foundation in programming languages like C, C++, JavaScript, TypeScript, Java, HTML, and CSS, 
                along with hands-on experience in modern frameworks and technologies such as ReactJS, Redux, Node.js, Express.js, PostgreSQL, REST APIs, and MongoDB.


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