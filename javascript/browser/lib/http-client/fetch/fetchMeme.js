const fetchMeme = () => {
  fetch("https://meme-api.herokuapp.com/gimme/wholesomememes")
    .then((response) => response.json())
      .then((data) => {
        return data;
      }
  );
};