import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';

function NavBar({ darkTheme, setDarkTheme }) {
  React.useEffect(() => {
    const storedTheme = localStorage.getItem('dark');
    if(storedTheme === true){
      setDarkTheme(true);
    }
    else{
      setDarkTheme(false);

    }
  }, [])
  const handleThemeToggle = () => {
    setDarkTheme(prev => {
      const newTheme = !prev;
      localStorage.setItem("dark", newTheme);
      return newTheme;
    })
  }
  return (
    <AppBar position="relative" sx={{ backgroundColor: darkTheme ? 'rgba(156,39,176,0.2)' : 'rgba(25,118,210,0.2)', top: "-10px", width: "100vw", left: '-10px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: darkTheme ? 'rgb(177, 215, 233)' : 'rgb(37,38,69)',
              textDecoration: 'none',
            }}
          >
            {/* This is the desktop name */}
            Divyshekhar Sinha
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: "19px",
              letterSpacing: '.3rem',
              color: darkTheme ? 'rgb(177, 215, 233)' : 'rgb(37,38,69)',
              textDecoration: 'none',
            }}
          >
            {/* This is the small display name */}
            Divyshekhar Sinha
          </Typography>
          
          <Box sx={{ flexGrow: 1,  display:'flex', justifyContent: 'end'}}>
            <Tooltip title={darkTheme ? "Light Mode" : "Dark Mode"}>
              <IconButton onClick={handleThemeToggle} sx={{ p: 0 }}>
                <DarkModeTwoToneIcon sx={{ color: darkTheme ? 'rgb(177, 215, 233)' : 'rgb(37,38,69)', }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
