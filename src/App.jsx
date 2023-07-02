import "./App.css";

import Header from "./components/Sections/Header";
import ManEating from "./components/Sections/ManEating";
import Habits from "./components/Sections/Habits";
import Limitations from "./components/Sections/Limitations";

function App() {
  return (
    <div className="container flex flex-col gap-10 max-w-[1440px] lg:my-0 lg:mx-auto">
      <Header />
      <ManEating />
      <Habits />
      <Limitations />
    </div>
  );
}

export default App;

