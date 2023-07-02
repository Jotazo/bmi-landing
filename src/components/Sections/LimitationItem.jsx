const LimitationItem = ({ limitation, index }) => {
  const LI_CLASSES = {
    0: "lg:col-span-4 lg:ml-8",
    1: "lg:col-start-4 lg:col-span-4 lg:ml-16",
    2: "lg:col-start-8 lg:col-span-4 ",
    3: "lg:col-start-3 lg:col-end-7 lg:h-fit",
    4: "md:col-start-2 lg:col-span-4 lg:ml-[-4rem]",
  };

  return (
    <li
      className={`p-6 limitationItem-card flex flex-col gap-4 md:col-span-2 lg:max-w-[365px] ${LI_CLASSES[index]}`}
    >
      <header className="flex gap-4 items-center">
        <img src={limitation.icon} alt={limitation.title} />
        <h5 className="heading-s text-gunMetal">{limitation.title}</h5>
      </header>
      <p className="body-m text-darkElectricBlue">{limitation.description}</p>
    </li>
  );
};

export default LimitationItem;
