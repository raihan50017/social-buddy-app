import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    header:{
        backgroundColor: '#282c34',
        color: 'white',
        textAlign: 'center',
        height: '300px',
        marginTop: '0px',
        paddingTop: '70px',
        boxSizing: 'border-box'
    }
  });

const Header = () => {
    const classes = useStyles();
    return (
       <Box>
           <div className={classes.header}>
               <h1>Social Buddy App</h1>
           </div>
       </Box>
    );
};

export default Header;