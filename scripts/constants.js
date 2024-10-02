export const EARTH = {
  name: "Earth",
  gravity: 0.001,
  thrust: 0.01,
  gravity_scientific: 9.807,
};

export const MOON = {
  name: "Moon",
  gravity: 0.000165,
  thrust: 0.0165,
  gravity_scientific: 1.625,
};

export const MARS = {
  name: "Mars",
  gravity: 0.000378,
  thrust: 0.023,
  gravity_scientific: 3.721,
};

export const TITAN = {
  name: "Titan",
  gravity: 0.000138,
  thrust: 0.0195,
  gravity_scientific: 1.352,
};
export const LANDER_WIDTH = 20;
export const LANDER_HEIGHT = 40;
export const TRANSITION_TO_SPACE = LANDER_HEIGHT * 4;
export const CRASH_VELOCITY = 0.6;
export const VELOCITY_MULTIPLIER = 20;
export const CRASH_ANGLE = 11;
export const INTERVAL = Math.floor(1000 / 120);
export const THRUST_FACTOR = 0.000001;
