class Ship {
    constructor(startingPort, passengers) {
        this.startingPort = startingPort;
        this.passengers = passengers;
        this.sailing = false;
    }

    setSail() {
        if(this.passengers >= 1) {
            this.sailing = true;
        } else {
            this.sailing = false;
        };
        if(this.passengers >= 1) {
            this.startingPort = false;
        } else {
            this.startingPort = this.startingPort;
        }

        
      }
   
}







module.exports = Ship;