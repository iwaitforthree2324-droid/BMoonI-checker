import { useState } from 'react'
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
    <div className='container'>
      <div className='card'>
        <h1>
          BM<span className = 'oon'>oon</span>I checker
        </h1>
        <div className='form'>
          <div className='input'>
            <label className='label'>身長[cm]：</label>
              <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div className='input'>
            <label className='label'>地球での体重[kg]：</label>
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
        </div>

        <button onClick={handleCalc}>BMI計算</button>

        {bmi !== null && (
          <p>
            <div className='showResult'>あなたの月でのBMIは<strong>{bmi.toFixed(1)}</strong>です</div><br></br>
            <div className='kome'>※BM<span className='oon'>oon</span>Iは身長[cm]/(月での体重[kg])^2で算出されます</div>
          </p>
        )}
      </div>  
    </div>
  )
}

export default App
