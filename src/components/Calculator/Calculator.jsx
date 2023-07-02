import { useEffect, useState } from "react";

import { calculateBMI, calculateBMIImperial } from "../../utils/bmi";

import RadioButton from "./FormUtils/RadioButton";
import ImperialForm from "./ImperialForm";
import MetricForm from "./MetricForm";
import BMISection from "./BMISection";

import {
  imperialIdealWeightCalculated,
  metricIdealWeightCalculated,
} from "../../utils/idealWeight";

const Calculator = () => {
  const [calculatorSelected, setCalculatorSelected] = useState("Metric");
  const [bmi, setBmi] = useState(null);
  const [idealWeight, setIdealWeight] = useState(null);

  useEffect(() => {
    setBmi(null);
    setIdealWeight(null);
  }, [calculatorSelected]);

  const handleBmi = (actualValues) => {
    const bmiCalculated =
      calculatorSelected === "Metric"
        ? calculateBMI(Number(actualValues.kg), Number(actualValues.cm))
        : calculateBMIImperial(
            Number(actualValues.ft),
            Number(actualValues.in),
            Number(actualValues.st),
            Number(actualValues.lbs)
          );

    const isValidBmi =
      !isNaN(bmiCalculated) &&
      isFinite(bmiCalculated) &&
      bmiCalculated !== "0.0";

    setBmi(!isValidBmi ? null : bmiCalculated);
  };

  const handleIdealWeight = (actualValues) => {
    const idealWeight =
      calculatorSelected === "Metric"
        ? metricIdealWeightCalculated(Number(actualValues.cm))
        : imperialIdealWeightCalculated({
            ft: Number(actualValues.ft),
            inc: Number(actualValues.in),
          });

    setIdealWeight(idealWeight);
  };

  const handleSelectedRadio = (value) => {
    setCalculatorSelected(value);
  };

  return (
    <>
      <form className="p-6 pt-8 bg-white rounded-2xl grid grid-cols-1 md:grid-cols-2 bmi-box-shadow md:w-full gap-y-6 lg:max-w-[567px] lg:absolute lg:right-[165px] lg:top-[100px]">
        <h3 className="heading-m col-start-1 col-span-2">
          Enter your details below
        </h3>
        <section className="w-full grid grid-cols-2 col-start-1 col-span-2 ">
          <RadioButton
            label="Metric"
            value={calculatorSelected}
            setIsSelected={handleSelectedRadio}
            containerClasses="col-start-1"
          />
          <RadioButton
            label="Imperial"
            value={calculatorSelected}
            setIsSelected={handleSelectedRadio}
            containerClasses="col-start-2"
          />
        </section>
        {calculatorSelected === "Metric" ? (
          <MetricForm
            handleBmi={handleBmi}
            handleIdealWeight={handleIdealWeight}
          />
        ) : (
          <ImperialForm
            handleBmi={handleBmi}
            handleIdealWeight={handleIdealWeight}
          />
        )}
        <BMISection
          bmi={bmi}
          calculatorSelected={calculatorSelected}
          idealWeight={idealWeight}
        />
      </form>
    </>
  );
};

export default Calculator;
