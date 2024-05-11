function WindowWidth({props}) {
  const [width, setWidth] = useState(0);

  function onResize() {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const content = `Window width: ${width}`;
  return <p 
            id={props.id} 
            style={props.style} 
            ref={props.ref} 
            class={props.class}
          >
            {content}
          </p>
}

export {WindowWidth};