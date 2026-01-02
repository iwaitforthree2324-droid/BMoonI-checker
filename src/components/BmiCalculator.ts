import { calculateBMI } from "../utils/bmi";

const handleCalculate = () => {
  const bmi = calculateBMI(
    Number(height),
    Number(weight)
  );
  setBmi(bmi);
};
