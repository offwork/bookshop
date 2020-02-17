import React, { FC } from 'react';
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
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

interface BookTileGridProps {
  books?:Array<{name: string, age: string}>;
  redirectUrl: (name: string) => void;
}

const BookTileGrid: FC<BookTileGridProps> = ({books, redirectUrl}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {books!.map((book, index) => (
          <GridListTile key={index}>
            {/* <img src={tile.img} alt={tile.title} /> */}
            <GridListTileBar
              title={book.name}
              subtitle={<span>by: {book.age}</span>}
              actionIcon={
                <IconButton 
                  aria-label={`info about ${book.name}`} 
                  className={classes.icon} 
                  onClick={() => redirectUrl(book.name)}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default BookTileGrid;
