import { Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { useContext, useEffect, useState } from 'react';

import SocketContext from '../contexts/SocketContext';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  bottomBorder: {
    borderBottom: '1px dotted #ccc',
  },
  gameColumns: {
    minHeight: '12em',
  }
})

const Lobby = () => {
  const socket = useContext(SocketContext);
  const classes = useStyles();
  const history = useHistory();
  const [joinExisting, setJoinExisting] = useState(false);
  const [playerName, setPlayerName] = useState();
  const [gameId, setGameId] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!socket) return;
    console.log("We have a socket in Lobby");
    socket.on('startNewGame', msg => {
      console.log("Starting new game!", msg);
    });

    socket.on('joinExistingGame', msg => {
      console.log("Joining existing game!", msg);
    });
  }, [socket]);

  const initiateNewGame = () => {
    if (!playerName || playerName === '') {
      setError(true);
    } else {
      setError(false);
      console.log("Initiating new game!");
      history.push('/game');
    }
  }

  const joinExistingGame = () => {
    const hasPlayerName = playerName && playerName !== '';
    const hasGameId = gameId && gameId !== '';
    if (!hasPlayerName || !hasGameId) {
      setError(true);
    } else {
      setError(false);
      console.log("Join existing game");
    }
  }

  return (
    <Container>
      <Grid container justify='space-evenly' spacing={3}>
        <Grid container item xs={12} justify='center'>
          <Typography variant={'h2'}>Welcome to EMPIRE</Typography>
        </Grid>
        <Grid container item xs={12} justify='center' className={classes.bottomBorder}>
          <Typography>You are in the Lobby.</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            variant='outlined'
            fullWidth={true}
            name='name'
            placeholder='Enter Player Name'
            inputProps={{ min: 0, style: { textAlign: 'center' } }}
            onChange={(e) => setPlayerName(e.target.value)}
            error={error && (!playerName || playerName === '')}
            helperText={error && (!playerName || playerName === '') ? 'Please enter your name' : ''}
          />
        </Grid>
        <Grid container item xs={6} direction='column' justify='center' className={`${classes.divider} ${classes.gameColumns}`}>
          {!joinExisting &&
            <Button variant="contained" color='primary' onClick={() => initiateNewGame()}>Start New Game</Button>
          }
        </Grid>
        <Grid container item xs={6} direction='column' justify='space-evenly' className={classes.gameColumns}>
          {!joinExisting &&
            <Button variant="contained" color='secondary' onClick={() => setJoinExisting(true)}>Join Existing Game</Button>
          }
          {joinExisting &&
            <>
              <TextField
                variant="outlined"
                name='gameId'
                placeholder='Enter Game ID'
                inputProps={{ min: 0, style: { textAlign: 'center' } }}
                onChange={(e) => setGameId(e.target.value)}
                error={error && (!gameId || gameId === '')}
                helperText={error && (!gameId || gameId === '') ? 'Please enter a game ID' : ''}
              />
              <Button variant="contained" color="secondary" onClick={() => joinExistingGame()}>Join Game</Button>
              <Button variant="contained" onClick={() => setJoinExisting(false)}>Cancel</Button>
            </>
          }
        </Grid>
      </Grid>
    </Container>
  )
}

export default Lobby;
