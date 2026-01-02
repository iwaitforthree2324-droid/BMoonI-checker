export const calculateBMI = (heightCm: number, weightKg: number): number => {
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    return bmi;
};