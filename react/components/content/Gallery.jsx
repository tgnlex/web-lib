import {useState} from 'react';
const row = {display: "flex", flexDirection: "row"}
// normally data would be included in a seperate file
const pictures = [{
  id: 1,
  url: 'https://images.pexels.com/photos/12726025/pexels-photo-12726025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  alt: 'Image one.'  
}, {
  id: 2,
  url: 'https://images.pexels.com/photos/5395766/pexels-photo-5395766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  alt: "Image two"
}, {
  id: 3,
  url: 'https://images.pexels.com/photos/19057526/pexels-photo-19057526/free-photo-of-fields-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  alt: 'Image Three'
}];
export function Gallery() {
  const [index, setIndex] = useState(0);
  function handleNextClick() {
    setIndex(index + 1);
  }
  function handleBackClick() {
    if(index > 0) {
      setIndex(index - 1)
    } else {
      return;
    }
  }
  let image = pictures[index];
  return (
    <div className="gallery">
    {index > 0 ? 
      <button onClick={handleBackClick}>Back</button>
     : <></>}
      <button onClick={handleNextClick}>Next</button>
      <div style={row} className="row">
        <h2>{`${image.id}.`}</h2>
        <h2 style={{marginLeft: 180}}>({index + 1} of {pictures.length})</h2>
      </div>
      <img src={image.url} alt={image.alt} />
    </div>
  );
}
