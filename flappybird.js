const canvas =document.getElementById("canvas");
const c=canvas.getContext("2d");

let Score=0;

const bird = new Bird();


function animate()
{
    c.clearRect(0,0,canvas.width,canvas.height);
    bird.update();
    requestAnimationFrame(animate);
}
animate();