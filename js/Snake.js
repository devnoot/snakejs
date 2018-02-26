function Snake() {
	this.x = 0
  this.y = 0
  this.dx = 1
  this.dy = 0
  this.width = 15
  this.height = 15
  this.score = 0
  this.color = 'rgb(0, 255, 0)'
  this.tail = []

  this.dir = function(x, y) {
  	this.dx = x
    this.dy = y
  }

  this.eat = function(x, y) {
  	var distance = dist(this.x, this.y, x, y)
    if (distance < 1 + scale/2) {
    	this.score++
      return true
    } else {
    	return false
    }
  }

  this.dead = function() {
  	for(let i=0; i<this.tail.length; i++){
    	let position = this.tail[i]
      let distance = dist(this.x, this.y, position.x, position.y)

      if (distance < 1) {
      	console.log('You lose')
        // to do: press space to restart
        this.score = 0
        this.tail = []
      }
    }
  }

  this.update = function() {

    for(let i=0; i<this.tail.length-1; i++){
    	this.tail[i] = this.tail[i+1]
    }

    if (this.score >= 1) {
    	this.tail[this.score - 1] = createVector(this.x, this.y)
    }

  	this.x = constrain(this.x + this.dx * scale, 0, width-this.width)
    this.y = constrain(this.y + this.dy * scale, 0, height-this.height)
  }

  this.drawScore = function() {
    fill(255)
    textSize(12)
    textAlign(RIGHT)
    text('SCORE: ' + this.score, width - 32, 24)
  }

  this.draw = function() {

  	fill(this.color)

    // draw the tail
    for(let i=0; i<this.tail.length; i++){
    	noStroke()
    	rect(this.tail[i].x, this.tail[i].y, scale, scale)
    }

    // draw the actual snake
    noStroke()
    rect(this.x, this.y, scale, scale)
  }
}
