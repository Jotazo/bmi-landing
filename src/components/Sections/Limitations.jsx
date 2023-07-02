import limitations from "../../data/limitations";

import LimitationItem from "./LimitationItem";

const Limitations = () => {
  return (
    <section className="p-5 flex flex-col gap-14 md:px-12 lg:grid lg:grid-cols-12 lg:gap-4">
      <header className="text-center flex flex-col gap-7 lg:col-span-6 lg:text-left">
        <h3 className="text-[2rem] leading-[110%] font-inter-semiBold text-gunMetal lg:heading-l ">
          Limitations of BMI
        </h3>
        <p className="body-m text-darkElectricBlue lg:pr-32">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </header>
      <ul className="grid gap-6 md:grid-cols-4 md:align-center lg:contents">
        {limitations.map((limitation, i) => {
          return <LimitationItem key={i} limitation={limitation} index={i} />;
        })}
      </ul>
    </section>
  );
};

export default Limitations;
