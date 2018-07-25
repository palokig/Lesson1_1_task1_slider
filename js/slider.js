
var elementSlider = document.getElementById('slider');

const arraySrc = ['i/airmax-jump.png','i/airmax-on-foot.png','i/airmax-playground.png','i/airmax-top-view.png','i/airmax.png'];
let step = 0;



function replaceSrc() {

 if (step == arraySrc.length ) {
     step =0;
 }
    elementSlider.src = arraySrc[step];
    step ++;
}
replaceSrc();
setInterval(replaceSrc, 5000);
