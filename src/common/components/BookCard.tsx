import React, { FC } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';


interface BookCardProp {
  name?: string;
  age?: string;
  redirectUrl?: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 128,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }),
);

const BookCard: FC<BookCardProp> = ({name, age, redirectUrl}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {age}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="detail" onClick={redirectUrl}>
            <DoubleArrowIcon />
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="logo192.png"
        title="Live from space album cover"
      />
    </Card>
  )
};

export default BookCard;
