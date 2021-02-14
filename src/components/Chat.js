import { useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types'
import SocketContext from '../contexts/SocketContext';

const Chat = props => {
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!socket) return;
    console.log("We have a socket in Chat");
    socket.on('chat', msg => {
      console.log("Got something!", msg);
      saveChatMessages(msg);
    })
  }, [socket]);

  const saveChatMessages = (msg) => {
    setMessages(oldMessages => [...oldMessages, msg]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('chat', message);
    setMessage('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="chat" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button>Send</button>
      </form>
      {messages.map((msg, index) => <li key={`msg_${index}`}>{msg}</li>)}
    </div>
  )
}

Chat.propTypes = {

}

export default Chat
