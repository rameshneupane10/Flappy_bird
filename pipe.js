class Pipe
{
    constructor()
    {
        this.position={
            x: canvas.width,
            y:Math.random()*(0- -250)+ -250,
        };

        this.size={
            width:50,
            height:400,
        };

        this.velocity={
            x: -1.5,
            y:0,
        };

        this.up = new Image();
        this.down = new Image();
        this.up.src = "./pipe-up.png";
        this.down.src = "./pipe-down.png";
    }


    drawup()
    {
        c.beginPath();
        c.drawImage(this.up,this.position.x,this.position.y,this.size.width,this.size.height);
    }

    drawdown()
    {
        c.beginPath()
        c.drawImage(this.down,this.position.x,this.position.y +this.size.height +150,this.size.width,this.size.height);
    }

    collision() 
    {
        // up pipe 
        if (
          this.position.x + this.size.width >=
            bird.position.x - bird.size.width / 2 &&
          this.position.x <=
            bird.position.x - bird.size.width / 2 + bird.size.width &&
          this.position.y + this.size.height >= bird.position.y &&
          this.position.y <= bird.position.y + bird.size.height
        ) {
          bird.isDead = true;
        }
    
        // down pipe
        if (
          this.position.x + this.size.width >=
            bird.position.x - bird.size.width / 2 &&
          this.position.x <=
            bird.position.x - bird.size.width / 2 + bird.size.width &&
          this.position.y + this.size.height + 150 + this.size.height >=
            bird.position.y &&
          this.position.y + this.size.height + 150 <=
            bird.position.y + bird.size.height
        ) {
          bird.isDead = true;
        }
      }

      move()
      {
        if(this.position.x+this.size.width<=0)
        {
            this.position.x=canvas.width;
            this.position.y=Math.random()*(0- -250)+ -250;
        }
        this.position.x+=this.velocity.x;   
      }

      update()
      {
        this.drawup();
        this.drawdown();
        if(!bird.isDead)
        {
            this.move();
            this.collision();
        }
      }
    
}