import manImg from "../../assets/images/image-man-eating.webp";

const ManEating = () => {
  return (
    <section className="grid gap-5 md:gap-10 md:grid-cols-2 lg:px-12 lg:mt-20">
      <img
        src={manImg}
        alt="man eating"
        className="md:w-[380px] md:h-[411px] md:ml-[-4rem] md:max-w-none lg:ml-0 lg:h-[533px] lg:w-[564px]"
      />
      <article className="m-5 md:m-0 md:self-center flex flex-col gap-5 md:pr-10 lg:mt-36 lg:gap-8">
        <h3 className="text-[2rem] leading-[110%] font-inter-semiBold text-gunMetal lg:heading-l">
          What your BMI result means
        </h3>
        <p className="body-m text-darkElectricBlue md:pr-2 lg:pr-32">
          A BMI range of 18.5 to 24.9 is considered a healthy
          &apos;weight.&apos; Maintaining a healthy weight may lower your
          chances of experiencing health issues later on, such as obesity and
          type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar
          content, incorporating ample fruits and vegetables. Additionally,
          strive for regular physical activity, ideally about 30 minutes daily
          for five days a week.
        </p>
      </article>
    </section>
  );
};

export default ManEating;
