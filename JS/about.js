AOS.init()

var rellax = new Rellax('.rellax');

//scroll cue lettering
$('.scroll-text').lettering();
const scrolltext = document.querySelector('.scroll-text');
const scrollcue = scrolltext.children;
console.log(scrollcue);
for(let i=0; i<scrollcue.length; i++) {
    scrollcue[i].style.transform = "rotate("+i*17.1+"deg)"
}
document.addEventListener("mousemove", function(e)
{
    scrolltext.style.left = e.pageX + 'px';
    scrolltext.style.top = (e.pageY) + $(window).height()*$(window).height()*.00016 + 'px';
})
//bottom scroll wheel lettering
// const bigscrolltext = document.querySelector('.wheel-text');
// $('.wheel-text').lettering();
// const scrollspans = bigscrolltext.children;
// for(let i=0; i<scrollspans.length; i++) {
//     scrollspans[i].style.transform = "rotate("+i*9+"deg)"
// }

var i=0;
const txt = 'About';
function typeWriter() {
    if (i < txt.length) {
      document.getElementById("typewriter").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, 140);
    }
  }
setTimeout(() => {  typeWriter(); }, 200);