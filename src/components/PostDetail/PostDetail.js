import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Comment from '../Comment/Comment';

const useStyles = makeStyles({
    postContainer:{
        padding:'100px',
        backgroundColor:'#ddd'
    }
  });

const PostDetail = (props) => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const classes = useStyles();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[postId])

    return (
        <div className={classes.postContainer}>
            <h1>{post.title}</h1>
            <hr></hr>
            <p>{post.body}</p>
            <Comment postId={postId}></Comment>
        </div>
    );
};

export default PostDetail;