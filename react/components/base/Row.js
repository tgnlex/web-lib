

const Row = (props) => {
 const style = {
   display: "flex", 
   flexDirection: "row" 
   color: props.color, 
   background: props.background,
   height: props.height, 
   width: props.width, 
   margin: props.margin: 
   padding: props.padding, 
   alignItems: props.alignItems, 
   alignContent: props.alignContent: 
   justifyItems: props.justifyItems, 
   justifyContent: props.justifyContent 
 };

  
    return (
      <div id={props.id} class={props.class} style={style}>
        {props.children}
      </div>
    )
}

export {Row};