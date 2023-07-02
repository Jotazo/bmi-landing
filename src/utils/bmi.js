export const calculateBMI = (weight, height) => {
  // Convert height to meters
  let heightInMeters = height / 100;

  // Calculate BMI
  let bmi = weight / (heightInMeters * heightInMeters);

  return bmi.toFixed(1);
};

export const calculateBMIImperial = (ft, inc, st, lbs) => {
  // Convert height to meters
  const heightInInches = convertHeightToInches(ft, inc);
  const weightInPounds = convertWeightToPounds(st, lbs);

  const weigthInKg = weightInPounds * 0.45359237;
  const heightInMeters = heightInInches * 0.0254;

  // Calculate BMI
  let bmi = weigthInKg / (heightInMeters * heightInMeters);

  return bmi.toFixed(1);
};

const convertHeightToInches = (feet, inches) => {
  // Convert feet to inches
  let heightInInches = feet * 12;

  // Add the remaining inches
  heightInInches += inches;

  return heightInInches;
};

const convertWeightToPounds = (stones, pounds) => {
  // Convert stones to pounds
  let weightInPounds = stones * 14;

  // Add the remaining pounds
  weightInPounds += pounds;

  return weightInPounds;
};

export const getWeightClassification = (bmi) => {
  let weightClassification = "";
  if (bmi < 18.5) weightClassification = "underweight";
  if (bmi >= 18.5 && bmi <= 24.9) weightClassification = "healthy weight";
  if (bmi >= 25 && bmi <= 29.9) weightClassification = "overweight";
  if (bmi >= 30) weightClassification = "obese";
  return weightClassification;
};
