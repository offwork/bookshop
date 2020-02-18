import React, { FC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


interface BookCardProp {
  book?: any;
  goToBack: () => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 736,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    back: {
      marginLeft: 'auto',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const BookCard: FC<BookCardProp> = ({book, goToBack}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="book" className={classes.avatar}>
            {book?.volumeInfo.title[0] ? book?.volumeInfo.title[0] : 'B'}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={book?.volumeInfo.title}
        subheader={book?.volumeInfo.subtitle}
      />
      <CardMedia
        className={classes.media}
        image={book?.volumeInfo.imageLinks.thumbnail ? book?.volumeInfo.imageLinks.thumbnail : 'logo512.png'}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {book?.volumeInfo.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Book decrement">
          <IndeterminateCheckBoxIcon />
        </IconButton>
        <IconButton aria-label="Book increment">
          <AddBoxIcon />
        </IconButton>
        <IconButton 
          aria-label="back"
          className={classes.back}
          onClick={goToBack}>
          <KeyboardBackspaceIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
};

export default BookCard;
