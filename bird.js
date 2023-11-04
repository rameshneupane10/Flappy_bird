class Bird{

constructor()
{
    this.position={
        x:canvas.width/2,
        y:0
    };


    this.velocity=
    {
        x:0,
        y:2,
    };

    this.size={
        width:50,
        height:50,
    };

    this.isDead=false;
    this.acceleration=0.2;
}

draw()
{
    c.beginPath();
    c.fillStyle="red";
    c.fillRect(this.position.x,this.position.y,this.size.width,this.size.height);
}

move()
{
    this.velocity.y+=this.acceleration;
    this.position.y+=this.velocity.y;
}

update()
{
    this.draw();
    this.move();
}


}