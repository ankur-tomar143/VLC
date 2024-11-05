const speedup = document.querySelector("#speedup");
const speeddown = document.querySelector("#speeddown");

const volumeup = document.querySelector("#volumeup");
const volumedown = document.querySelector("#volumedown");

const videoBtn = document.querySelector("#openBtn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("#main");


// ----------video button handler---------
const handleInput = function () {
  console.log("Input is clicked");
  videoInput.click();
};

//----------Select file using openBtn
const acceptInputHandler = function (obj) {
  // console.log("Input selected");
  const selectedFiles = obj.target.files;
  // src to base 60
  const link = URL.createObjectURL(selectedFiles[0]);
  const videoEle = document.createElement("video");

  videoEle.src = link;
  videoPlayer.appendChild(videoEle);
  videoEle.volume = 0.3;
  videoEle.controls = true;
};
videoBtn.addEventListener("click", handleInput);
// speedup.addEventListener("click", speedupHandler);
videoInput.addEventListener("change", acceptInputHandler);

////--------------speedDown----------------

const speedupHandler = () => {
  const videoElement = document.querySelector("video");
 if(videoElement.playbackRate>3){
  return;
 }
  if (videoElement == null) {
    return;
  }
  const incrSpeed = videoElement.playbackRate + 0.5;
  videoElement.playbackRate = incrSpeed;
  
  showToast(incrSpeed+"X");
};
speedup.addEventListener("click", speedupHandler);

const speeddownHandler = () => {
  const videoElement = document.querySelector("video");
  if (videoElement == null) {
    return;
  }
  const decreSpeed = videoElement.playbackRate - 0.5;
  videoElement.playbackRate = decreSpeed;
  showToast(decreSpeed+"X");

};
speeddown.addEventListener("click", speeddownHandler);

//-------------voulume handler

const volumeUpHandler = ()=>{
  const videoElement = document.querySelector("video");
  if(videoElement == null){
    return;
  }
   
  if(videoElement.volume>=0.9){
    return;
  }
  incrVolume = videoElement.volume + 0.1
  videoElement.volume = incrVolume;

  showToast(incrVolume*100);

}
volumeup.addEventListener("click",volumeUpHandler);

const volumeDownHandler = ()=>{
  const videoElement = document.querySelector("video");
  if(videoElement == null){
    return;
  }
   
  if(videoElement.volume<=0.1){
    return;
  }
  const decrVolume = videoElement.volume - 0.1;
  videoElement.volume =decrVolume;

  showToast(decrVolume*100);

}
volumedown.addEventListener("click",volumeDownHandler);

// ---------------toast handler
const toast = document.querySelector(".toast");

function showToast(input){
  toast.textContent = input;
  toast.style.display = "block";
  setTimeout(()=>{
    toast.style.display = "none";
  },2000)
};

// -------------fullscreen-------------
const fullscreen = document.querySelector("#fullscreen");

const fullscreenHandle = ()=>{
  videoPlayer.requestFullscreen();
}

fullscreen.addEventListener("click",fullscreenHandle);