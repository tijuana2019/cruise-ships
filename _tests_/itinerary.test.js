const Itinerary = require("../src/itinerary.js");

describe("itinerary", () => {
  it("returns an object", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
  it("has a ports property", () => {
    const itinerary = new Itinerary(["Calais", "Dover", "Zebrugge"]);
    expect(itinerary.ports).toBeTruthy();
    expect(itinerary.ports).toEqual(["Calais", "Dover", "Zebrugge"]);
  });
});
