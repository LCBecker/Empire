import { Container, Grid, Paper, Typography } from '@material-ui/core';

import Location from './Location';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  board: {
    padding: '4em',
    backgroundColor: '#aaa',
  },
  title: {
    verticalAlign: 'center',
  }
})

const Board = () => {
  const classes = useStyles();

  const generateBoardRows = () => {
    const yCoords = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    const locations = yCoords.map((y) => {
      let row = [];
      for (let x = 1; x < 13; x++) {
        row.push(<Location coordinates={x + '-' + y} />);
      }
      return row;
    })
    return locations;
  }

  return (

    <Paper className={classes.board} elevation={12}>
      <Grid container spacing={3}>
        {generateBoardRows()}
      </Grid>
    </Paper>
  )
}

Board.propTypes = {

}

export default Board
