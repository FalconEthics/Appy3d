const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//this will get the context of the canvas
const context = canvas.getContext("2d");
const frameCount = 772;

//this will create the path to the images
const currentFrame = (index) => `./assets/${(index + 1).toString()}.ext`;

const images = [];
let pic = { frame: 0 };

//this will populate the images array with the images
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  console.log(currentFrame(i));
  images.push(img);
}

//this will create the animation
gsap.to(pic, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5,
    pin: "canvas",
    end: "1000%",
  },
  onUpdate: render,
});

//this will create the text animation
gsap.fromTo(
  ".pic-text",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "50%",
      end: "55%",
    },
    onComplete: () => {
      gsap.to(".pic-text", { opacity: 0 });
    },
  }
);

//this will render the images
images[0].onload = render;

//
function render() {
  //this will clear the canvas
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

  //this will draw the images
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[pic.frame], 0, 0);
}

//some extra animations
const nav = document.querySelector(".nav");
setInterval(() => {
  nav.classList.toggle("text-white");
}, 500);

