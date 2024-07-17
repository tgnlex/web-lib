import {useState} from 'react';
const SyncedInputs = () => {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value)
  }

  return (
  <div className="synced">
  <label htmlFor="one">Input One:</label>
      <input
        name="one"
        value={text}
        onChange={handleChange}
        /><br/>
     <label htmlFor="two">Input Two:</label>
      <input
        name="two"
        label="Second input"
        value={text}
        onChange={handleChange}
      />
    </div>
  )
}
export {SyncedInputs}