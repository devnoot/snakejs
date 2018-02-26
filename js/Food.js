function Food() {
	this.x = 0
  this.y = 0
	this.color = 'yellow'
  this.location = ''

  this.spawn = function() {
    this.color = random(colors)
		this.x = Math.floor(random(columns)) * scale
    this.y = Math.floor(random(rows)) * scale
  }

	this.draw = function(){
  	fill(this.color)
    noStroke()
    rect(this.x, this.y, scale, scale)
  }

}
