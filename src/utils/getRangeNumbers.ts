const getRangeNumbers = (min: number, max: number): number[] => {
  const numbersRange = [];

  for (let number = min; number <= max; number++) {
    numbersRange.push(number);
  }

  return numbersRange;
};

export default getRangeNumbers;
