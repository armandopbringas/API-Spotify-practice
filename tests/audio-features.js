const audioFeatures = require("../fixtures/audio-features-angeles.json");
const { getEnergyAverage  } = require("../lib/audio-features");

const mandatoryProperties = ["id", "name", "uri"];

describe("#getEnergyAverage", () => {
  test("getEnergyAverage calculates average from an array", () => {
    const energyAverage = getEnergyAverage(audioFeatures);
    expect(energyAverage).toBeDefined();
    expect(typeof energyAverage).toStrictEqual("number");
    expect(energyAverage).toBeGreaterThan(0);
  });


  // This is a validated test case for an energy average of ##.##
  test("getEnergyAverage works correctly", () => {
    //const energyAverage = getEnergyAverage(myValidatedTestCase);
    // expect(energyAverage).toBeGreaterThan(##.##);
  });

  test("#getEnergyAverage handles wrong input", () => {
    expect(() => getEnergyAverage({ veryInvalidProperty: "LOL" })).toThrow();
    expect(() => getEnergyAverage(1000)).toThrow();
  });
});
