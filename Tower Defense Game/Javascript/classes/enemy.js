class Enemy extends Sprite {
    constructor( {position = {x: 0, y: 0} } ) {
        super({position, imageSrc: './Asset Pack/orc.png', frames: { max: 7 }})
        this.position = position
        this.width = 100
        this.height = 100
        this.waypointIndex = 0
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2 
        }

        this.radius = 50
        this.health = 100
        this.velocity = {
            x: 0,
            y: 0
        }
    }

    draw() {
        super.draw()

        //health bar
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y - 15, this.width, 10)

        c.fillStyle = 'green'
        c.fillRect(this.position.x, this.position.y - 15, this.width * this.health / 100, 10)
        
    }

    update() {
        this.draw()
        super.update()

        const waypoint = waypoints[this.waypointIndex]       //getting the first arrow within the waypoints
        const yDistance = waypoint.y - this.center.y      //grabbing distance from right triangle to go from one point to another
        const xDistance = waypoint.x - this.center.x 
         
        const angle = Math.atan2(yDistance, xDistance)

        const speed = 2.5


        this.velocity.x = Math.cos(angle) * speed
        this.velocity.y = Math.sin(angle) * speed

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y     //makes sure the enemy is moving in the correct direction

        this.center = {     //centers the image on each update
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2 
        }
        
        if(
            Math.abs(Math.round(this.center.x) - Math.round(waypoint.x)) < Math.abs(this.velocity.x) && 
            Math.abs(Math.round(this.center.y) - Math.round(waypoint.y)) < Math.abs(this.velocity.y) && 
            this.waypointIndex < waypoints.length - 1)    //solves problem of different enemys having different location values
        {
            this.waypointIndex++
        }
    }

}