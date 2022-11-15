import { useState, SyntheticEvent } from "react";
import useNumbers from "../../hooks/useNumbers";
import "./Form.css";

interface InitialStateInputs {
  min: number;
  max: number;
}
const initialStateInputs: InitialStateInputs = {
  min: 0,
  max: 0,
};

interface FormProps {
  checkResults: number[];
  setCheckResult: (numbers: number[]) => void;
}

const Form = ({ setCheckResult }: FormProps): JSX.Element => {
  const [numbers, setNumbers] = useState(initialStateInputs);
  const { checkNumbers } = useNumbers();

  const handleCheck = (event: SyntheticEvent) => {
    event.preventDefault();
    setCheckResult(checkNumbers(numbers.min, numbers.max));

    setNumbers(initialStateInputs);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumbers({
      ...numbers,
      [event.target.id]: parseInt(event.target.value),
    });
  };

  const buttonDisable = numbers.max <= numbers.min ? true : false;

  return (
    <form onSubmit={handleCheck} className="form">
      <div className="input-container">
        <label htmlFor="min" className="input-label">
          Número mínimo
        </label>
        <input
          className="input-number"
          type="number"
          id="min"
          onChange={handleChange}
          value={numbers.min}
        />
      </div>

      <div className="input-container">
        <label htmlFor="max" className="input-label">
          Número máximo
        </label>
        <input
          className="input-number"
          type="number"
          id="max"
          onChange={handleChange}
          value={numbers.max}
        />
      </div>
      <button disabled={buttonDisable} className="form-button">
        Calcular
      </button>
    </form>
  );
};

export default Form;
