const canvas =document.getElementById("canvas");
const c=canvas.getContext("2d");

let Score=0;

const bird = new Bird();
const pipe = new Pipe();
const bg = new BackGround(0, 0);
const bg2 = new BackGround(bg.size.width, 0);

alert("Controls : Press SPACE for jump ");

function animate()
{
  c.clearRect(0,0,canvas.width,canvas.height);
  bg.update(bird.isDead);
  bg2.update(bird.isDead);
  pipe.update();
  bird.update();

  c.beginPath();
  c.fillStyle = "white";
  c.font = "30px sans serif";
  c.fillText(Score, 10, 40);
  if (bird.isDead) {
    c.font = "bold 60px Arial";
    c.fillStyle="red";
    c.fillText("GAME OVER", 20, 250);
    c.font = "bold 50px Arial";
    c.fillStyle="blue";
    c.fillText("SCORE :"+ Score,70,300);
    clearInterval(intervalId);
  }
    requestAnimationFrame(animate);
}
const intervalId = setInterval(() => {
    Score++;
  }, 3500);
  
  document.addEventListener("keydown", () => {
    bird.jump();
  });
animate();