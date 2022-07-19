let slider = {
  slides: ['1.jpg', '2.jpg', '3.jpg'],
  frame: 0,
  set: function(image) {
    let path = "url(" + image + ")";
    console.log(path);
    document.getElementById('scr').style.backgroundImage = path;
    document.getElementById('scr').classList.toggle('animated');
  },
};