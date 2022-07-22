let slider = {
  
  slides: ['1.jpg', '2.jpg', '3.jpg'],
  
  frame: 0,
  
  set: function(image) {
    let path = "url(../images/" + image + ")";
    console.log(path);
    document.getElementById('photo').style.backgroundImage = path;
    document.getElementById('photo').className = 'animated1';
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
