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
import Memories from '../assets/Memories.png';
import Button from '@mui/material/Button';
import Redux_icon from '../assets/redux_icon.png';
function Home({ darkTheme }) {
    return (
        <Box
            display={"flex"}
            marginTop={'60px'}
            marginLeft={'0px'}
            justifyContent={"center"}
            sx={{
                p: "20px",
                color: darkTheme ? 'rgb(177, 215, 233)' : 'rgb(37,38,69)'

            }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={profile}
                        alt="Profile Picture"
                        style={{ width: "400px", height: '400px', paddingBottom: 0, marginTop: "-60px", borderRadius: "50%", objectFit: "cover", overflow: "hidden" }}
                    />

                </Grid>
                <Grid item xs={12} sm={6} sx={{ display: "flex", justifyContent: 'center' }}>
                    <Typography sx={{ fontSize: '20px', marginLeft: "20px" }}>
                        Hi! I'm Divyshekhar Sinha, <br /> A third year Computer Science student at KIIT University, India.<br />
                        I am a Fullstack Developer.<br />
                        My current Tech Stack include: <br />
                        <br />
                        <img
                            src={TS_icon}
                            title="Typescript"
                            alt="Typescript"
                            style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '10px' }}
                        />
                        <img
                            src={React_icon}
                            title="React"
                            alt="React"
                            style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '8px' }}
                        />
                        <img
                            src={JS_icon}
                            title="Javascript"
                            alt="Javascript"
                            style={{ height: 'auto', width: '5.3%', borderRadius: "20%", marginRight: '10px' }}

                        />
                        <img
                            src={Html_icon}
                            title="HTML"
                            alt="HTML"
                            style={{ height: 'auto', width: '3.6%', borderRadius: "20%", marginRight: '10px' }}

                        />
                        <img
                            src={Css_icon}
                            title="CSS"
                            alt="CSS"
                            style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '10px' }}

                        />
                        <img
                            src={Node_icon}
                            title="Node JS"
                            alt="Node"
                            style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '10px' }}

                        />
                        <img
                            src={Express_icon}
                            title="Express JS"
                            alt="Express"
                            style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '0px' }}

                        />
                        {/* NEED TO CHANGE THE POSTMAN ICON */}
                        <img
                            src={Postman_icon}
                            title="Postman"
                            alt="Postman"
                            style={{ height: 'auto', width: '6%', borderRadius: "40%", marginRight: '10px' }}

                        />
                        <img
                            src={Mongo_icon}
                            title="MongoDB"
                            alt="MongoDB"
                            style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '10px' }}

                        />
                        <img
                            src={Postgres_icon}
                            title="Postgres"
                            alt="Postgres"
                            style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '10px' }}

                        />

                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} sx={{ marginTop: "50px" }}>
                    <Typography sx={{ fontSize: '30px', fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>
                        Projects
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ marginTop: '50px' }}>
                    <Typography sx={{ fontSize: '25px', fontWeight: '20px', display: 'flex', justifyContent: 'left', color:'rgb(233, 177, 196)'}}>
                        Memories<br /> <br />
                    </Typography>
                    <Typography sx={{ fontSize: '17px', display: 'flex', justifyContent: 'center' }}>
                    Memories is a fullstack web application that allows users to upload photos and descriptions to create a record of their moments. Users can like posts, edit them, or delete them as needed. The app provides a simple interface for managing and viewing posts, making it easy to keep track of personal memories and interactions.
                    <br />
                    </Typography>
                    <Typography sx={{color: darkTheme ? 'rgb(254,246,179)' : 'rgb(21,94,149)', fontWeight: 'bold'}}>Tech stack used: </Typography><br/>
                    <img
                            src={Mongo_icon}
                            title="MongoDB"
                            alt="MongoDB"
                            style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '10px' }}

                        />
                    <img
                            src={Express_icon}
                            title="Express JS"
                            alt="Express"
                            style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '10px' }}

                        />
                    <img
                            src={React_icon}
                            title="React"
                            alt="React"
                            style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '8px' }}
                        />
                    <img
                            src={Node_icon}
                            title="Node JS"
                            alt="Node"
                            style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '10px' }}

                        />
                    <img
                            src={JS_icon}
                            title="Javascript"
                            alt="Javascript"
                            style={{ height: 'auto', width: '5.3%', borderRadius: "20%", marginRight: '10px' }}

                        />
                    <img
                            src={Redux_icon}
                            title="Redux"
                            alt="Redux"
                            style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '10px' }}

                        />
                    <br />
                    <br />
                    <Button variant="contained" sx={{ borderRadius: '25px', background: 'rgb(183,113,228)', color:'rgb(177, 215, 233)', marginRight: '20px'}} onClick={() => window.open('https://memories-frontend-yv72.onrender.com/', '_blank')} >See Live</Button>
                    <Button variant="contained" sx={{ borderRadius: '25px', background: 'rgb(183,113,228)', color:'rgb(177, 215, 233)' }} onClick={() => window.open('https://github.com/Divyshekhar/Memories_Frontend', '_blank')} >Source Code</Button>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ marginTop: '50px' }}>
                    <img 
                        src={Memories}
                        title="Memories"
                        alt="Memories"
                        style={{ width: '80%', borderRadius: '20px', marginLeft: '50px'}}
                    />
                </Grid>


            </Grid>
        </Box>
    )
}
export default Home;