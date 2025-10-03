import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{padding: '20px', fontFamily: 'Arial'}}>
      <h1>🤖 Meu Agente IA</h1>
      <p>Sistema funcionando!</p>
      <p>Backend: <a href="http://localhost:5000">http://localhost:5000</a></p>
    </div>
   )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
