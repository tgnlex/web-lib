const Button = ({props, action, text}) => {
  return (
    <button 
     id={props.id || ""} 
     class={props.class || "btn"} 
     onClick={action || props.action}
     value={props.value}
     ref={props.ref}>
      {text}{props.children}}   
  </button>
  )
} 

export {Button};