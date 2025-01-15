import SmartBrain_img from '../assets/SmartBrains.jpeg';
import React_icon from '../assets/react_icon.png';
import JS_icon from '../assets/JS_icon.png';
import Node_icon from '../assets/Node_icon.png';
import Express_icon from '../assets/expressjs_icon.png';
import Postgres_icon from '../assets/PostGres_icon.png';
import { Button, Grid, Typography } from '@mui/material';


export const SmartBrains = ({ darkTheme }) => {
    return (
        <>
            <Grid item xs={12} sm={6} sx={{ marginTop: '50px' }}>
                <Typography sx={{ fontSize: '25px', fontWeight: 'bold', display: 'flex', justifyContent: 'left', color: darkTheme ? 'rgb(233, 177, 196)' : 'rgb(222,109,46)' }}>
                    Smartbrains<br /> <br />
                </Typography>
                <Typography sx={{ fontSize: '19px', display: 'flex', justifyContent: 'center' }}>
                    SmartBrains is a web application where users can sign in, paste the link to an image, and detect faces in the picture using the Clarifai API. The application keeps track of the number of detections by maintaining a score for each user, which updates every time a new image is processed. It provides a straightforward way for users to interact with image detection technology.
                    <br />
                </Typography>
                <Typography sx={{ color: darkTheme ? 'rgb(254,246,179)' : 'rgb(21,94,149)', fontWeight: 'bold' }}>Tech stack used: </Typography><br />
                <img
                    src={Postgres_icon}
                    title="Postgres"
                    alt="Postgres"
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
                    style={{ height: 'auto', width: '5%', borderRadius: "20%", marginRight: '7px' }}

                />
                <img
                    src={JS_icon}
                    title="Javascript"
                    alt="Javascript"
                    style={{ height: 'auto', width: '5.3%', borderRadius: "20%", marginRight: '10px' }}

                />
                <br />
                <br />
                <Button variant="contained" sx={{ borderRadius: '25px', background: 'rgb(183,113,228)', color: 'rgb(177, 215, 233)', marginRight: '20px' }} onClick={() => window.open('https://myapp-ftwv.onrender.com/', '_blank')} >See Live</Button>
                <Button variant="contained" sx={{ borderRadius: '25px', background: 'rgb(183,113,228)', color: 'rgb(177, 215, 233)' }} onClick={() => window.open('https://github.com/Divyshekhar/facerecognition', '_blank')} >Source Code</Button>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ marginTop: '50px' }}>
                <img
                    src={SmartBrain_img}
                    title="Smartbrain"
                    alt="Smartbrain"
                    style={{ width: '85%', borderRadius: '20px', marginLeft: '50px' }}
                />
            </Grid>

        </>
    )
}