const Ship = require("../src/ship.js");
const Port = require("../src/port.js");

describe("ship", () => {
  it("returns an object", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it("has a starting port", () => {
    const port = new Port("Dover");
    const ship = new Ship(1, port);
    expect(ship.currentPort.name).toBe(port.name);
  });
  it("enables the ship to set sail from a port", () => {
    const ship = new Ship(1);
    ship.setSail();
    expect(ship.sailing).toBe(true);
    expect(ship.currentPort).toBeFalsy();

    const ship1 = new Ship(0);
    ship1.setSail();
    expect(ship1.sailing).toBe(false);

    const ship2 = new Ship(7);
    ship2.setSail();
    expect(ship2.sailing).toBe(true);
    expect(ship.currentPort).toBeFalsy();
  });
  it("takes a port object in it's constructor function", () => {
    const port = new Port("Calais");
    const ship = new Ship(1, port);
    expect(ship.currentPort.name).toBe(port.name);
  });

  it("is able to dock at different ports", () => {
    const port = new Port("Zeebrugge");
    const ship = new Ship(1, port);
    ship.dock();
    expect(ship.docked).toBe(true);
  });
});
