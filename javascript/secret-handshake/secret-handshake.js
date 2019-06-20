export const secretHandshake = input => {
  if (typeof input !== "number") {
    throw new Error("Handshake must be a number");
  }
  let tempInput = input;
  const binary = [];
  for (let n = 0; input - 2 ** n >= 0; n++) {
    if (tempInput % 2 !== 0) {
      binary.push(1);
      tempInput = (tempInput - 1) / 2;
    } else {
      binary.push(0);
      tempInput /= 2;
    }
  }
  const handshake = ["wink", "double blink", "close your eyes", "jump"];

  let result = [];

  for (let i = 0; i < binary.length; i++) {
    if (i === 4) {
      result = result.reverse();
    } else if (binary[i] === 1) {
      result.push(handshake[i]);
    }
  }

  return result;
};
