import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
      backgroundColor:'purple',
      margin:'20px',
      padding:'20px',
      color:'white'
    }
  });

const SinglePost = (props) => {
    const classes = useStyles();
    const {title, id} = props.post;
    const history = useHistory();

    const handleClick = (postId) => {
      const url = `/post-details/${postId}`;
      history.push(url);
    }

    return (
        <div className={classes.cardContainer}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          <CardActions>
            <Button onClick={() => handleClick(id)} variant='contained' color='primary'>See more</Button>
          </CardActions>
        </Card>
      </div>
    );
};

export default SinglePost;