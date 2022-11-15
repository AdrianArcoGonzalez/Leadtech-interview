import checkExponentRoot from "../utils/checkExponentRoot";
import getDivisorsExponentedSum from "../utils/getDivisorsExponentedSum";
import getRangeNumbers from "../utils/getRangeNumbers";

const useNumbers = () => {
  const checkNumbers = (min: number, max: number): number[] => {
    const rangeNumbersArray = getRangeNumbers(min, max);
    const validNumbers: number[] = [];
    let counter = rangeNumbersArray[0];

    const divisorsExponentedAndSum =
      getDivisorsExponentedSum(rangeNumbersArray);

    divisorsExponentedAndSum.forEach((number) => {
      if (checkExponentRoot(number)) {
        validNumbers.push(counter);
      }
      counter++;
    });

    return validNumbers;
  };

  return { checkNumbers };
};

export default useNumbers;
