// to dos:
// implement snake tail - DONE
// randomize food color - DONE -- Use colors array
// add differnet types of food
// implement snake death if run into self or wall - DONE
// implement score counter
// implement do not allow button press opposite of snake direction
// keep snake and food on a grid - DONE
// make everything look pretty

const scale = 16
const canWidth = 512
const canHeight = 512
var snake = new Snake()
var food = new Food()

const colors = [
	'#D95D39',
  '#EA3546',
  '#BCED09',
  '#2F52E0'
]

var columns = 0
var rows = 0

function setup() {
	createCanvas(canWidth,canHeight)
  frameRate(16)
  columns = Math.floor(width / scale)
  rows = Math.floor(height / scale)
 	food.spawn()
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
  	snake.dir(0, -1)
  } else if (keyCode === RIGHT_ARROW) {
  	snake.dir(1, 0)
  } else if (keyCode === DOWN_ARROW) {
  	snake.dir(0, 1)
  } else if (keyCode === LEFT_ARROW) {
  	snake.dir(-1, 0)
  } else if (keyCode === 32) {
  	snake.dir(0, 0)
  }
}

function draw() {
  background('black')
  if (snake.eat(food.x, food.y)) {
  	console.log('food eaten!')
  	food.spawn()
  }
 	snake.update()
  snake.dead()
  snake.draw()
  snake.drawScore()
  food.draw()
}
