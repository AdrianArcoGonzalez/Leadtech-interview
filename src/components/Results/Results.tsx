import "./Results.css";

interface ResultsProps {
  results: number[];
}

const Results = ({ results }: ResultsProps): JSX.Element => {
  return (
    <section className="results-container">
      <ul className="results-list">
        {results.length === 0 ? (
          <li className="results">There isn't any number found</li>
        ) : (
          results.map((result) => (
            <li className="results" id={`${result}`}>
              {result}
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default Results;
