
interface LoadingProps {
  title?: string;
}
const Loading = (props: LoadingProps) => {
  let title = props.title
  return (
    <main className="loading">
      {title 
        ? <h1 className="loading-text">Loading {{title}}....</h1>
        : <h1 className="loading-text">Loading....</h1>
      }
    </main>
  )
}
