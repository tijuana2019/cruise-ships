class Ship {
    constructor(startingPort, passengers) {
        this.startingPort = startingPort;
        this.passengers = passengers;
        this.sailing = true;
    }

    setSail() {
        if(this.passengers >= 1) {
            this.sailing = true;
        } else {
            this.sailing = false;
        }

        
      }
   
}







module.exports = Ship;