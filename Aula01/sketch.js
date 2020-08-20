function setup() {
  // largura, altura
  createCanvas(600, 400);
  console.log("Iniciou");
}

function draw() {
  background(100,200,100); //RGB
  //posX, posY, largura, altura
  fill(255,0,150);
  rect(100, 50, 20, 20);
  fill(0);
  rect(220, 300, 60, 60);
  fill(255);
  rect(200, 300, 50, 50);
  rect(650,200,100,100);
}