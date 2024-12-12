import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NavBar(): React.JSX.Element {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Приложение для учета задач
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Домой
        </Button> 
      </Toolbar>
    </AppBar>
  );
}
