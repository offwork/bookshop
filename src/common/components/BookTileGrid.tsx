import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 736,
      height: '100%',
      transform: 'translateZ(0)',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

interface BookTileGridProps {
  books?: any;
  redirectUrl: (bookId: string) => void;
}

const BookTileGrid: FC<BookTileGridProps> = observer(({books, redirectUrl}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={226} cols={4} className={classes.gridList}>
        <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div">Books</ListSubheader>
        </GridListTile>
        {books!.map((book: any, index: number) => (
          <GridListTile key={index}>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
            <GridListTileBar
              title={book.volumeInfo.title}
              subtitle={<span>by: {book.volumeInfo.publisher}</span>}
              actionIcon={
                <IconButton 
                  aria-label={`info about ${book.title}`} 
                  className={classes.icon} 
                  onClick={() => redirectUrl(book.id)}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
});

export default BookTileGrid;
