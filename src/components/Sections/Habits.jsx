import habits from "../../data/habits";

import HabitItem from "./HabitItem";

const Habits = () => {
  return (
    <section className="relative p-5 md:my-20">
      <div className="habits-bg"></div>
      <ul className="my-14 grid gap-10 md:px-6 lg:grid-cols-3">
        {habits.map((habit, i) => (
          <HabitItem key={i} habit={habit} />
        ))}
      </ul>
    </section>
  );
};

export default Habits;
