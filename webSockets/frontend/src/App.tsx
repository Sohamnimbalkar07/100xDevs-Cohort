import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([])
  const [sendMessage, setSendMessages] = useState<string>("")

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    newSocket.onopen = () => {
      console.log('Connection established');
      newSocket.send('Hello Server!');
    }
    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);
      setMessages((messages) => [...messages, message.data]);
    }
    setSocket(newSocket);
    return () => newSocket.close();
  }, [])

  return (
    <div>
      <input type='text' onChange={(e) => setSendMessages(e.target.value)}></input>
    <button onClick={()=> socket?.send(sendMessage)}>Click me to send message</button>
    <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
    </div>
  )
}

export default App