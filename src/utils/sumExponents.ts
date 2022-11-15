const sumExponents = (numbers: number[], exponent: number) => {
  let sumExponent = 0;
  numbers.forEach((number) => {
    sumExponent = sumExponent + Math.pow(number, exponent);
  });

  return sumExponent;
};

export default sumExponents;
