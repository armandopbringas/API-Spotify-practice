// const { normalize } = require("yargs");
const invalidTracksResponse = require("../fixtures/tracks-angeles.json");
const { normalizeTracksResponse, normalizeAudioFeaturesResponse } = require("../lib/normalize");

const mandatoryProperties = ["id", "name", "uri"];

describe("Validate", () => {
  test("Validate the ugliest input", () => {
    // expect(() => normalizeTracksResponse(invalidTracksResponse)).toThrow();
    // expect(() => normalizeTracksResponse(invalidTracksResponseCase2)).toThrow();
    // expect(() => normalizeTracksResponse(invalidTracksResponseCase3)).toThrow();
  });
});

// test("Validate the ugliest input", () => {
  // expect(normalize(validTracksResponse)).toStrictEqual(true);
// });
