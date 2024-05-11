
const Node = (props) => {
  return (
    <div 
      id={props.id || ""} 
      class={props.class || "node"} 
      style={props.style || ""}
    >
      {props.children}
    </div>
  )
}

export {Node};