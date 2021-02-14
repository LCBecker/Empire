import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Game from './components/Game';
import Lobby from './components/Lobby';
import SocketContext from './contexts/SocketContext';
import socketIOClient from 'socket.io-client';

//import { io } from 'socket.io-client';

const ENDPOINT = "http://localhost:5001";

function App() {
  const [socket, setSocket] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);
  const [dt, setDt] = useState('');

  useEffect(() => {
    setSocket(socketIOClient(ENDPOINT));
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on('connect', () => {
      //subscribeToDateEvent();
      setSocketConnected(socket.connected);
    });
    socket.on('disconnect', () => {
      setSocketConnected(socket.connected);
    });

    // socket.on("getDate", data => {
    //   setDt(data);
    // });
    return () => socket.disconnect();
  }, [socket]);

  // manage socket connection
  const handleSocketConnection = () => {
    if (socketConnected)
      socket.disconnect();
    else {
      socket.connect();
    }
  }

  // subscribe to socket date event
  const subscribeToDateEvent = (interval = 1000) => {
    socket.emit('subscribeToDateEvent', interval);
  }


  //const socket = socketIOClient(ENDPOINT);
  //const socket = io(ENDPOINT);
  return (
    <div>
      {/* <div>
        <h2>Welcome to Socket.IO App! - <a href="https://www.cluemediator.com/" target="_blank">Clue Mediator</a></h2>

        <div><b>Connection status:</b> {socketConnected ? 'Connected' : 'Disconnected'}</div>
        <input
          type="button"
          style={{ marginTop: 10 }}
          value={socketConnected ? 'Disconnect' : 'Connect'}
          onClick={handleSocketConnection} />

        <div style={{ marginTop: 20 }}><b>Date: </b> {dt}</div>
      </div> */}

      <SocketContext.Provider value={socket}>
        <Router>
          <Switch>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/">
              <Lobby />
            </Route>
          </Switch>
        </Router>
      </SocketContext.Provider>
    </div>
  );
}

export default App;
