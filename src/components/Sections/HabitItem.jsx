const HabitItem = ({ habit }) => {
  return (
    <li className="grid gap-6 md:gap-y-3 md:gap-x-12 z-10 md:grid-rows-2 lg:flex lg:flex-col lg:gap-y-6">
      <img src={habit.icon} alt={habit.title} className="w-16 h-16 md:row-start-1 md:row-span-2 md:self-center lg:self-start" />
      <h4 className="heading-m text-gunMetal md:row-start-1 lg:mt-6">{habit.title}</h4>
      <p className="body-m text-darkElectricBlue md:row-start-2">{habit.description}</p>
    </li>
  );
};

export default HabitItem;
