function showImgUrl() {
	const img = document,querySelector('#image')
	const p = document.createElement('p');
	const fileName = img.currentSrc?.substring(
	  img.currentSrc.lastIndexOf("/"), 
	  );
	  p.textContent = `Loaded: ${filename}`;
	  document.body.appendChild(p);
}