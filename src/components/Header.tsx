import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { IoIosPartlySunny } from "react-icons/io";
import { IoHome, IoSearchOutline  } from "react-icons/io5";

export const Header = () => {
    return (
        <Box sx={{marginBottom: 5}}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <IoIosPartlySunny />
                </IconButton>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    WeatherApp
                </Typography>
                <Link to="/buscar">
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <IoSearchOutline />
                    </IconButton>
                </Link>
                <Link to="/">
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <IoHome />
                    </IconButton>
                </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
