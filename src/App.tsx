import { useState } from 'react';
import './App.css';
import { app } from '../src/firebase';
import { getDatabase, ref, set } from 'firebase/database';
function App() {
  const [code, setCode] = useState('0');

  function writeUserData(userId: string) {
    const db = getDatabase(app);
    set(ref(db), {
      userId: userId,
    });
  }
  return (
    <>
      <input
        type="text"
        onChange={(e) => setCode(e.target.value)}
        placeholder="كود"
        style={{ padding: 5 }}
      />
      <div className="card">
        <button onClick={() => writeUserData(code)}>عليهم</button>
      </div>
    </>
  );
}

export default App;
