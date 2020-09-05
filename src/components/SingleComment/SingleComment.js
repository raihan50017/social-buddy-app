import React from 'react';
import { makeStyles } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const useStyles = makeStyles({
    singleComment:{
        padding:'10px',
        border:'1px solid lightblue',
        margin:'10px 0px 30px 0px'
    },
    author:{
      display:'flex'
    },
    authorImg:{
        height:'70px',
        width:'70px',
        borderRadius:'50%',
        border:'2px solid lightblue'
    },
    authorName:{
        padding:'0px 5px'
    }
  });

const SingleComment = (props) => {
    const {name, email, body, img} = props.comment;
    const classes = useStyles();
    return (
        <div className={classes.singleComment}>
            <div className={classes.author}><img className={classes.authorImg} src={img} alt="author"></img><h4 className={classes.authorName}><small>{name}</small></h4></div>
            <p>{body}</p>
            <p><small>Email:{' '+email}</small></p>
            <p><span style={{padding:'10px'}}>10:</span><span><ThumbUpAltIcon fontSize='small'></ThumbUpAltIcon></span></p>
        </div>
    );
};

export default SingleComment;