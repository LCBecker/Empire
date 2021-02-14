import { Container, Grid, Typography } from '@material-ui/core';

import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import Board from './Board'
import Chat from './Chat';
import Empires from './Empires';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  logo: {
    fontSize: '5em',
  },
  container: {
    //margin: '20px',
  }
})

const Game = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth={false}>
      <Grid container className={classes.container} spacing={2}>
        <Grid container item xs={12} justify='center'>
          {/* <AccountBalanceTwoToneIcon className={classes.logo} /> */}
          <Typography variant='h1' component={'span'}>Empire</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>Players</Typography>
          <Chat />
        </Grid>
        <Grid item xs={6}>
          <Board />
        </Grid>
        <Empires />
      </Grid>
    </Container>
  )
}

Game.propTypes = {

}

export default Game
