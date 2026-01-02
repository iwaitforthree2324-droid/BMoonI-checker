import { useState } from 'react'
import { handleCalc } from './bmi';
import './App.css'

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const handleCalc = () => {
    if(!height || !weight){
      setBmi(null);
      return;
    }

    const h = Number(height) / 100;
    const w = Number(weight);
    const moon_w = w / 6;

    if(h <= 0 || w <= 0){
      setBmi(null);
      return;
    }

    const result = moon_w / (h * h);
    setBmi(result);
  }

  return (
    <div>
      <h1>
        BM<span className = 'oon'>oon</span>I checker
      </h1>
      <div>
        <label>
          身長(cm):
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          体重(kg):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
      </div>

      <button onClick={handleCalc}>計算</button>

      {bmi !== null && (
        <p>
          あなたの月でのBMIは<strong>{bmi.toFixed(1)}</strong>です
        </p>
      )}
    </div>  
  )
}

export default App
