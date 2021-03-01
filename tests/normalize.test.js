const tracks = require("../fixtures/tracks-angeles.json");
const { normalizeTracksResponse, normalizeAudioFeaturesResponse } = require("../lib/normalize");

const mandatoryProperties = ["id", "name", "uri"];

describe("Normalize", () => {
  test("Tracks API response normalization", () => {
    const normalizedResponse = normalizeTracksResponse(tracks);
    expect(Array.isArray(normalizedResponse)).toEqual(true);
    normalizedResponse.forEach(track => {
      expect(track).toBeDefined();
      expect(typeof track).toEqual("object");
      mandatoryProperties.forEach(property => expect(track).toHaveProperty(property));
    });
  });

  test("Normalize should discard duplicates", () => {
    const normalizedResponse = normalizeTracksResponse(tracks);
    const { length: numberOfNormalizedTracks } = normalizedResponse;
    const ids = normalizedResponse.map(track => track.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toStrictEqual(numberOfNormalizedTracks);
  });
});
