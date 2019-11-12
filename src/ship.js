class Ship {
    constructor(passengers, port) {
        this.currentPort = port;
        this.passengers = passengers;
        this.sailing = false;
        this.port = port;
        this.docked = false;
    }

    setSail() {
        if(this.passengers >= 1) {
            this.sailing = true;
        } else {
            this.sailing = false;
        };
        if(this.passengers >= 1) {
            this.currentPort = false;
        } else {
            this.currentPort = this.currentPort;
        }     
      }
    
    dock() {
        if(this.port) {
            this.docked = true;     
        } else {
            this.docked = false;
        }

    }
   
}







module.exports = Ship;