let slider = {
  
  slides: ['1.jpg', '2.jpg', '3.jpg'],
  
  animations: ['animated1', 'animated2', 'animated3'],
  
  frame: 0,
  
  set: function(image) {
    let path = "url(../images/" + image + ")";
    let rand = getRandomInt(0, this.animations.length - 1);
    let animatedClass = this.animations[rand];
    console.log(path);
    document.getElementById('photo').style.backgroundImage = path;
    document.getElementById('photo').className = animatedClass;
  },
  
  init: function () {
    this.set(this.slides[this.frame]);
  },
  
  left: function() {
    this.frame--;
    if (this.frame < 0) this.frame = this.slides.length - 1;
    this.init();
  },
  
  right: function() {
    this.frame++;
    if (this.frame === this.slides.length) this.frame = 0;
    this.init();
  },
  
};

window.onload = function() {
  slider.init();
  setInterval(function () {
    slider.right();
  }, 5e3);
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
