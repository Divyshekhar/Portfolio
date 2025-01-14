import { Box, Typography, Grid } from "@mui/material";
import profile from '../assets/profile.jpg';
import TS_icon from '../assets/TS_icon.png';
import React_icon from '../assets/react_icon.png';
import JS_icon from '../assets/JS_icon.png';
import Html_icon from '../assets/Html_icon.png';
import Css_icon from '../assets/Css_icon.png';
import Node_icon from '../assets/Node_icon.png';
import Express_icon from '../assets/expressjs_icon.png';
import Postman_icon from '../assets/postman_icon.svg';
import Mongo_icon from '../assets/Mongo_icon.png';
import Postgres_icon from '../assets/PostGres_icon.png';
function Home({ darkTheme }) {
    return (
        <Box
            display={"flex"}
            marginTop={'60px'}
            justifyContent={"center"}
            sx={{
                p: "20px",
                color: darkTheme ? 'rgb(177, 215, 233)' : 'rgb(37,38,69)'

            }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <img
                        src={profile}
                        alt="Profile Picture"
                        style={{ width: "60%", height: '86%', paddingBottom: 0, marginTop: "-60px", marginLeft: "40px", borderRadius: "20%" }}
                    />

                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{ fontSize: '20px' }}>
                        Hi! I'm Divyshekhar Sinha, <br /> A third year Computer Science student at KIIT University, India.<br />
                        I am a Fullstack Developer.<br />
                        My current Tech Stack include: <br />
                        <br />
                        <img 
                            src={TS_icon}
                            title="Typescript"
                            alt="Typescript"
                            style={{ height: '10%', width: '5%', borderRadius: "20%", marginRight: '10px' }}
                        /> 
                        <img 
                            src={React_icon}
                            title="React"
                            alt="React"
                            style={{ height: '10%', width: '5%', borderRadius: "20%", marginRight: '8px' }}
                        />
                        <img 
                            src={JS_icon}
                            title="Javascript"
                            alt="Javascript"
                            style={{ height: '10%', width: '5.3%', borderRadius: "20%", marginRight: '10px' }}
                            
                        />
                        <img 
                            src={Html_icon}
                            title="HTML"
                            alt="HTML"
                            style={{ height: '5%', width: '3.6%', borderRadius: "20%", marginRight: '10px' }}
                            
                        />
                        <img 
                            src={Css_icon}
                            title="CSS"
                            alt="CSS"
                            style={{ height: '5%', width: '5%', borderRadius: "20%", marginRight: '10px' }}
                            
                        />
                        <img 
                            src={Node_icon}
                            title="Node JS"
                            alt="Node"
                            style={{ height: '5%', width: '5%', borderRadius: "20%", marginRight: '10px' }}
                            
                        />
                         <img 
                            src={Express_icon}
                            title="Express JS"
                            alt="Express"
                            style={{ height: '5%', width: '5%', borderRadius: "20%", marginRight: '0px' }}
                            
                        />
                        <img 
                            src={Postman_icon}
                            title="Postman"
                            alt="Postman"
                            style={{ height: '5%', width: '5%', borderRadius: "20%", marginRight: '10px' }}
                            
                        />
                         <img 
                            src={Mongo_icon}
                            title="MongoDB"
                            alt="MongoDB"
                            style={{ height: '5%', width: '5%', borderRadius: "20%", marginRight: '10px' }}
                            
                        />
                        <img 
                            src={Postgres_icon}
                            title="Postgres"
                            alt="Postgres"
                            style={{ height: '5%', width: '5%', borderRadius: "20%", marginRight: '10px' }}
                            
                        />
                        
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{ fontSize: '20px' }}>
                        this is left
                    </Typography>
                </Grid>

            </Grid>
        </Box>
    )
}
export default Home;