// All fundamental & required properties are present otherwise err
const audioFeatures = require("../fixtures/audio-features-angeles.json");
const AUDIO_FEATURES_PROPS = "audio_features";
const DANCEABILITY_PROP = "danceability";

const getDanceability = () => audioFeatures[AUDIO_FEATURES_PROPS][0][DANCEABILITY_PROP];
