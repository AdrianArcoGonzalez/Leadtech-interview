import findDivisorsWithRestZero from "./findDivisors";
import sumExponents from "./sumExponents";

const getDivisorsExponentedSum = (numbersArray: number[]): number[] => {
  const result: number[] = [];

  numbersArray.forEach((number) => {
    const divisors = findDivisorsWithRestZero(number);
    const divisorsExponented = sumExponents(divisors, 2);
    result.push(divisorsExponented);
  });

  return result;
};

export default getDivisorsExponentedSum;
