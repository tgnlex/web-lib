export class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX;
    this.velY;
    this.color;
    this.size;  
  } 
  draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
  }
  update() {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
    
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
    
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
    
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
    
    this.x += this.velX;
    this.y += this.velY;
  }
  collisionDetect() {
    for (const ball in balls) {
      if (this !== ball) {
        const dx = this.x;
        const dy = this.y; 
        const distance = Math.sqrt(dx * dx + dx * dy);
        function random(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }        
        function randomRGB() {
          return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
        }
        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB()
        }
      }
    } 
  }
  loop() { 
    balls = [];
    ctx.fillStyle = "rgb(0 0 0 / 25%)";
    ctx.fillRect(0, 0, width, height);
  
    for (const ball of balls) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
  
    requestAnimationFrame(loop);
  }
  
  
}  



