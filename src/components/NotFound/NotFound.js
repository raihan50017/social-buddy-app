import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    notFound: {
      color:'#333',
      backgroundColor:'#ddd',
      padding:'50px',
      textAlign:'center',
      height:'400px'
    }
  });

const NotFound = () => {
    const classes = useStyles();
    return (
        <div className={classes.notFound}>
            <h3>Page Not found</h3>
            <p>Error!!! 404</p>
        </div>
    );
};

export default NotFound;