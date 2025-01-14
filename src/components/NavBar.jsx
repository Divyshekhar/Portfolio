import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';


const pages = [
  { name: "About", path: '/about' },
  { name: "Projects", path: '/projects' },
  { name: "Contact", path: '/contact' }
];


function NavBar({ darkTheme, setDarkTheme }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {/* This is the small display menu items */}
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>
                    <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {page.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
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
            Divyshekhar Sinha Small
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  fontFamily: 'monospace',
                  color: darkTheme ? 'rgb(177, 215, 233)' : 'rgb(37,38,69)',
                  display: 'block'
                }}
              > 
              {/* This is the Desktop Menu Items */}
                <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={darkTheme ? "Light Mode" : "Dark Mode"}>
              <IconButton onClick={() => {
                setDarkTheme(prevState => !prevState)
              }} sx={{ p: 0 }}>
                <DarkModeTwoToneIcon sx={{ color: darkTheme ? 'rgb(177, 215, 233)' : 'rgb(37,38,69)' }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
