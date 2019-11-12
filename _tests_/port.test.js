const Port = require("../src/port.js");

describe("port", () => {
    it("returns an object", () => {
        expect(new Port()).toBeInstanceOf(Object);
    })
    it("has a name property", () => {
        const port = new Port("Calais");
        expect(port.name).toBe("Calais")
    })
})