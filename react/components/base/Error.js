import {useErrorBoundary} from 'preact/hooks';
import {Node, Text, Button} from './_BaseExporter';

const Error = ({id, props}) => {
  const [error, reset] = useErrorBoundary(
    error => console.log(error.message),
  );
  if (error) {
    return (
      <div 
        id={id || props.id}
        class = {props.class}
        style = {props.style}
        ref = {props.ref}
      >
        <p id={props.textId} class={props.textClass} style={props.textStyle}>{error.message}</p>
        <button onClick={reset} id={props.buttonId} class={props.buttonClass} style={props.buttonStyle}>"Try again."</button>
      </div>
    )
  }
}
export {Error};