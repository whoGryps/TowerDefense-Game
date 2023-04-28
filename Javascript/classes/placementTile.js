class PlacementTile {
    constructor({position = {x: 0, y:0}}) {
        this.position = position
        this.size = 64
        this.color = 'rgba(255, 255, 255, 0)'
        this.occupied = false
    }
    //adding a comment

    draw() {
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.size, this.size)
    }

    //check for collision detection with mouse
    update(mouse) {
        this.draw()

        if(mouse.x > this.position.x && mouse.x < this.position.x + this.size &&
            mouse.y > this.position.y && mouse.y < this.position.y + this.size) {
                //console.log("colliding")
                this.color = 'rgba(255, 255, 255, 0.25)'
        }                 
        else this.color = 'rgba(255, 255, 255, 0)'

    }
}