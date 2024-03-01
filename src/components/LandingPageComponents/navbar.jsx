import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

import ButtonGroup from '@mui/material/ButtonGroup';

export default function Navbar() {
    return (
        // <div display="block">
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="#3f51b5"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <h4>BREADTH Recommendor</h4>
                    </Typography>
                    <Button color="inherit"><h5>Tab1</h5></Button>
                    <Button color="inherit"><h5>Tab2</h5></Button>
                    <Button color="inherit"><h5>Tab3</h5></Button>

                    <Stack spacing={5} direction="row" >

                        <Button variant="contained">Login</Button>

                    </Stack>
                   


                </Toolbar>

            </AppBar>
        </Box>
        // </div>
    );
}
