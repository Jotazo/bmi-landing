import { getWeightClassification } from "../../utils/bmi";

const getIdealWeightText = (calculatorSelected, idealWeight) => {
  const idealWeightText =
    calculatorSelected === "Metric"
      ? `${idealWeight[0].kg}kgs - ${idealWeight[1].kg}kgs`
      : `${idealWeight[0].st}st ${idealWeight[0].lbs}lbs - ${idealWeight[1].st}st ${idealWeight[1].lbs}lbs`;

  return idealWeightText;
};

const BMISection = ({ bmi, calculatorSelected, idealWeight }) => {
  const titleText = bmi ? "Your BMI is..." : "Welcome!";
  const titleStyles = bmi ? "body-m-bold" : "heading-m";
  const weigthClassification = getWeightClassification(bmi);

  return (
    <section
      className={`text-white p-8 rounded-2xl md:rounded-r-full md:rounded-l-[99rem] w-full col-start-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-y-4 ${
        !bmi && "gap-y-4 md:gap-y-2"
      } bmi-gradient`}
    >
      <h5 className={`${titleStyles} col-start-1 md:self-center`}>
        {titleText}
      </h5>
      {bmi && <h2 className="heading-l col-start-1">{bmi}</h2>}
      {bmi ? (
        <p className="body-s col-start-1 md:col-start-2 md:row-start-1 md:row-span-2 md:self-center">
          Your BMI suggests you’re a {weigthClassification}. Your ideal weight
          is between{" "}
          {idealWeight && (
            <span className="font-inter-semiBold">
              {getIdealWeightText(calculatorSelected, idealWeight)}
            </span>
          )}
        </p>
      ) : (
        <p className="body-s col-start-1 col-span-2 md:row-span-2 md:self-center">
          Enter your height and weight and you’ll see your BMI result here
        </p>
      )}
    </section>
  );
};

export default BMISection;
