let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenImg;
let windowWidth = window.innerWidth;

const thumbFlower = "ffthumbnail";
const thumbScenery = "scenery";
let getFullImgUrl;

if (galleryImages) {
  galleryImages.forEach(function (image, index) {
    image.onclick = function () {
      let getElementCss = window.getComputedStyle(image);
      getFullImgUrl = getElementCss.getPropertyValue("background-image");
      let getImgUrlPos;
      if (getFullImgUrl.includes(thumbFlower)) {
        getImgUrlPos = getFullImgUrl.split("/images/ffthumbnail/");
      } else if (getFullImgUrl.includes(thumbScenery)) {
        getImgUrlPos = getFullImgUrl.split("/images/sceneryThumb/");
      }
      let setNewImgUrl = getImgUrlPos[1].replace('")', "");

      getLatestOpenImg = index + 1;

      //popup window
      let container = document.body;
      let newImgWindow = document.createElement("div");
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute("class", "img-window");
      newImgWindow.setAttribute("onclick", "closeImg()");

      let newImg = document.createElement("img");
      newImgWindow.appendChild(newImg);

      // disables right click on opened images
      newImg.addEventListener("contextmenu", (event) => event.preventDefault());

      if (getFullImgUrl.includes(thumbFlower)) {
        newImg.setAttribute("src", "images/florafauna/" + setNewImgUrl);
      } else if (getFullImgUrl.includes(thumbScenery)) {
        newImg.setAttribute("src", "images/scenery/" + setNewImgUrl);
      }

      // image being displayed
      newImg.setAttribute("id", "current-img");

      newImg.onload = function () {
        // hide scrollbar when image opens
        document.body.style.overflow = "hidden";

        let newPrevBtn = document.createElement("button");
        newPrevBtn.setAttribute("class", "imgButton");
        newPrevBtn.setAttribute("id", "prevButton");
        let tagPrevBtn = document.createElement("i");
        tagPrevBtn.setAttribute("class", "fas fa-arrow-left");
        newPrevBtn.appendChild(tagPrevBtn);
        container.appendChild(newPrevBtn);

        newPrevBtn.setAttribute("onclick", "changeImg(0)");

        let newNextBtn = document.createElement("button");
        newNextBtn.setAttribute("class", "imgButton");
        newNextBtn.setAttribute("id", "nextButton");
        let tagNextBtn = document.createElement("i");
        tagNextBtn.setAttribute("class", "fas fa-arrow-right");
        newNextBtn.appendChild(tagNextBtn);
        container.appendChild(newNextBtn);

        newNextBtn.setAttribute("onclick", "changeImg(1)");
      };
    };
  });
}

function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector("#prevButton").remove();
  document.querySelector("#nextButton").remove();
  // show scroll bar
  document.body.style.overflow = "visible";
}

function changeImg(direction) {
  document.querySelector("#current-img").remove();

  let getImgWindow = document.querySelector(".img-window");
  let newImg = document.createElement("img");
  getImgWindow.appendChild(newImg);

  let calcNewImg;

  if (direction === 1) {
    calcNewImg = getLatestOpenImg + 1;
    if (calcNewImg > galleryImages.length) {
      calcNewImg = 1;
    }
  } else if (direction === 0) {
    calcNewImg = getLatestOpenImg - 1;
    if (calcNewImg < 1) {
      calcNewImg = galleryImages.length;
    }
  }

  if (getFullImgUrl.includes(thumbFlower)) {
    newImg.setAttribute("src", "images/florafauna/image" + calcNewImg + ".jpg");
  } else if (getFullImgUrl.includes(thumbScenery)) {
    newImg.setAttribute("src", "images/scenery/image" + calcNewImg + ".jpg");
  }

  newImg.setAttribute("id", "current-img");

  getLatestOpenImg = calcNewImg;
}
