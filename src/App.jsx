import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // 1. Save Function: Current count ko localStorage mein save karega
  const handleSave = () => {
    localStorage.setItem('counter_value', JSON.stringify(count));
    showMessage('Progress Saved Successfully!');
  };

  // 2. Load Function: LocalStorage se saved count ko wapas fetch karega
  const handleLoad = () => {
    const savedCount = localStorage.getItem('counter_value');

    if (savedCount !== null) {
      setCount(JSON.parse(savedCount));
      showMessage('Saved Progress Loaded!');
    } else {
      showMessage('No Saved Progress Found!');
    }
  };

  // Helper function: Message dikha kar 2 second baad automatic chhupane ke liye
  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  // Basic Counter Handlers
  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => {
    if (count > 0) setCount(prev => prev - 1);
  };
  const handleReset = () => setCount(0);

  return (
    <div className="container">
      <h1>My Counter App</h1>
      <div className="count-display">{count}</div>
      {/* Dynamic Status Message */}
      {message && (<p style={{ color: '#2196F3', fontWeight: 'bold', marginBottom: '8px' }}>{message}</p>)}

      {/* Primary Counter Controls */}
      <div className="button-group">
        <button onClick={handleDecrement} className="btn btn-decrement">Decrease</button>
        <button onClick={handleReset} className="btn btn-reset">Reset</button>
        <button onClick={handleIncrement} className="btn btn-increment">Increase</button>
      </div>

      {/* Storage Controls (Save & Load) */}
      <div className="button-group" style={{ marginTop: '15px' }}>
        <button onClick={handleSave} className="btn" style={{ backgroundColor: '#2196F3', color: 'white' }}>Save</button>
        <button onClick={handleLoad} className="btn" style={{ backgroundColor: '#9C27B0', color: 'white' }}>Load</button>
      </div>
    </div>
  );
}

export default App;