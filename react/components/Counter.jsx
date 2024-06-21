import {useState} from 'react';
const Counter = () => {
  const [value, setValue] = useState(0)

  function increment() {
    const count = value + 1;
    setValue(count);
    return;
  }
  function reset() {
    setValue(0)
  }

  return (
    <div id="counter">
      <div className="box">
        <output>{value}</output>
      </div>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  )
}

export {Counter};