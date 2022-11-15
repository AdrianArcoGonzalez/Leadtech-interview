const findDivisorsWithRestZero = (numberToFindDivisors: number): number[] => {
  const divisors = [];

  for (let number = 1; number <= numberToFindDivisors; number++) {
    if (numberToFindDivisors % number === 0) {
      divisors.push(number);
    }
  }

  return divisors;
};

export default findDivisorsWithRestZero;
