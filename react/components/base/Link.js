const Link = (url, props) => {
  return (
    <a 
    id={url == '/' && 'active'} 
    class={props.class || "link"} 
    href={url || props.url}>
      {props.children}
    </a>
  )
}

export {Link};