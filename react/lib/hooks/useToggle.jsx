import {useState} from 'react';
// For typescript set the state parameter to boolean
// EX: const useToggle = (state: boolean) => {}
const useToggle = (state) => {
  const [value, setValue] = useState(state)
  
  const toggle = () => {setValue(!value)};
  return [value, toggle]
}

export default useToggle;