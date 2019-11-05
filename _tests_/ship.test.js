const Ship = require("../src/ship.js");


describe("ship", () => {
    it("returns an object", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it("has a starting port", () => {
        const ship = new Ship("Dover");
        expect(ship.startingPort).toBe("Dover");
    })
    })