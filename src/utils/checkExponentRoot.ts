const checkExponentRoot = (number: number): boolean => {
  if (Number.isInteger(Math.sqrt(number))) {
    return true;
  }
  return false;
};

export default checkExponentRoot;
