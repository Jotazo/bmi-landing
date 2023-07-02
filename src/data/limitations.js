import genderIcon from "../assets/images/icon-gender.svg";
import ageIcon from "../assets/images/icon-age.svg";
import muscleIcon from "../assets/images/icon-muscle.svg";
import pregnancyIcon from "../assets/images/icon-pregnancy.svg";
import raceIcon from "../assets/images/icon-race.svg";

export default [
  {
    icon: genderIcon,
    title: "Gender",
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    icon: ageIcon,
    title: "Age",
    description:
      "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
  },
  {
    icon: muscleIcon,
    title: "Muscle",
    description:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  {
    icon: pregnancyIcon,
    title: "Pregnancy",
    description:
      "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
  },
  {
    icon: raceIcon,
    title: "Race",
    description:
      "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
  },
];
