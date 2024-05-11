import {Link, Text} from './_BaseExporter.js';
const Resource = ({props, url, title, description}) => {
  const style = {
      padding: "0.75rem 1.5rem",
      borderRadius:" 0.5rem",
      textAlign: "left",
      textDecoration: "none",
      color: "#222",
      backgroundColor: "black",
      border:" 1px solid transparent",
    }

  return (
    
    <a 
      id={props.id}
      href={url || props.url} 
      style={props.style || style} 
      target={props.target || "_blank"} 
      class={props.class  || "link"}
      ref={props.ref} 
    >
        <h2 
          id={props.titleId} 
          class={props.titleClass || "link-title"}
          ref={props.titleRef}
        >
            { title || props.title}
        </h2>
        <p 
          id={props.textId} 
          class={props.textClass || "description"}
          ref={props.textRef}>
            {description || props.description}
        </p>
    </Link>
  )
}

export {Resource};