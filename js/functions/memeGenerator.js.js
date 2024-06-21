 const btn = document.querySelector(".meme-btn")
 const meme = document.querySelector(".meme")
 const memeTitle = document.querySelector(".meme--title")
 const memeAuthor = document.querySelector(".meme--author")

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title; 
  memeAuthor.innerHTML = author;
}

const fetchMeme = () => {
  fetch("https://meme-api.herokuapp.com/gimme/wholesomememes")
    .then((response) => response.json())
      .then((data) => {updateDetails(data.url, data.title, data.author)}
  );
};

 generateMemeBtn.addEventListener("click", generateMeme);

 generateMeme();