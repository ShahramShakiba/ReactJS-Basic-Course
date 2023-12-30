import { calculateInvestmentResults } from '../util/investment';

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);

  return <div>Results</div>;
}

/* Derive Our Results
=> deriving-value, computing values based on state

*/
