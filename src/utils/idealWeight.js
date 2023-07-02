const metricIdealWeight = (height, low = false) => {
  const valueToConvert = low ? 18.5 : 24.9;
  return (valueToConvert * (height / 100) ** 2).toFixed(1);
};

export const metricIdealWeightCalculated = (height) => {
  const lowIdealWeight = { kg: metricIdealWeight(height, true) };
  const highIdealWeight = { kg: metricIdealWeight(height) };
  return [lowIdealWeight, highIdealWeight];
};

const ftToIn = (ft) => {
  return ft * 12;
};

const imperialIdealWeight = (height, low = false) => {
  const valueToConvert = low ? 18.5 : 24.9;
  const heightInch = ftToIn(height.ft) + height.inc;
  const weightInLbs = ((valueToConvert * heightInch ** 2) / 703).toFixed(0);
  const weightInSt = weightInLbs / 14;
  const stoneValue = Math.floor(weightInSt); // Extracts the whole number part
  const lbsValue = Math.round((weightInSt - stoneValue) * 10);
  return { st: stoneValue, lbs: lbsValue };
};

export const imperialIdealWeightCalculated = (height) => {
  return [imperialIdealWeight(height, true), imperialIdealWeight(height)];
};
