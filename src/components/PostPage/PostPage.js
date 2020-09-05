import React, { useEffect, useState } from 'react';
import SinglePost from '../SinglePost/SinglePost';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    postPage: {
      color:'#333',
      backgroundColor:'#ddd',
      padding:'10px'
    },
    centerText:{
        textAlign:'center'
    }
  });

const PostPage = () => {
    const [posts, setPosts] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div className={classes.postPage}>
            <h2 className={classes.centerText}>Our Posts</h2>
            {
                posts.map(post => <SinglePost key={post.id} post={post}></SinglePost>)
            }
        </div>
    );
};

export default PostPage;