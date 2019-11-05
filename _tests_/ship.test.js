const Ship = require("../src/ship.js");


describe("ship", () => {
    it("returns an object", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it("has a starting port", () => {
        const ship = new Ship("Dover");
        expect(ship.startingPort).toBe("Dover");
    });
    it("enables the ship to set sail from a port", () => {
        const ship = new Ship("Dover", 1);
        ship.setSail();
        expect(ship.sailing).toBe(true);
        expect(ship.startingPort).toBeFalsy();

        const ship1 = new Ship("Dover", 0);
        ship1.setSail();
        expect(ship1.sailing).toBe(false);
        expect(ship1.startingPort).toBe("Dover");

        const ship2 = new Ship("Dover", 7);
        ship2.setSail();
        expect(ship2.sailing).toBe(true);
        expect(ship.startingPort).toBeFalsy();
    })
    })