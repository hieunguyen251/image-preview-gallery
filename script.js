function upDate(previewPic) {
  console.log("Mouse over triggered");
  console.log("Image source: ", previewPic.src);
  console.log("Alt text: ", previewPic.alt);

  const imageBox = document.getElementById("image");

  imageBox.style.backgroundImage = `url('${previewPic.src}')`;
  imageBox.textContent = previewPic.alt;
}

function undo() {
  console.log("Mouse out triggered");

  const imageBox = document.getElementById("image");

  imageBox.style.backgroundImage = "url('')";
  imageBox.textContent = "Hover over an image below to display here.";
}
