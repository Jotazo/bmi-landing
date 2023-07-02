import logoIcon from "../../assets/images/logo.svg";

import Calculator from "../Calculator/Calculator";

const Header = () => {
  return (
    <header className="relative p-6 md:p-14 grid gap-5 lg:grid-cols-2 lg:grid-rows lg:min-h-[600px]">
      <div className="absolute w-full h-[640px] lg:h-[630px] lg:w-[978px] z-[-100] top-0 header-bg"></div>
      <img
        src={logoIcon}
        className="w-10 h-10 place-self-center lg:col-start-1 lg:col-span-2 lg:place-self-start"
      />
      <h1 className="heading-l text-gunMetal text-center md:px-[8.5rem] lg:row-start-2 lg:px-0 lg:pr-[17rem] lg:text-left lg:self-center">
        Body Mass Index Calculator
      </h1>
      <p className="body-m text-darkElectricBlue text-center mb-8 lg:row-start-3 lg:text-left lg:pr-56">
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>
      <Calculator />
    </header>
  );
};

export default Header;
