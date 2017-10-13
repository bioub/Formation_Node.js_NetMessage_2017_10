// Object REST/SPREAD (Node > 8)
const coords3D = {
  x: 10,
  y: 20,
  z: 30,
};

const {z, ...coords2D} = coords3D;
const clone = {...coords3D};

console.log(coords2D);
