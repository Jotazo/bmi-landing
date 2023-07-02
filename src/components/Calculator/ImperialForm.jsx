import { useState } from "react";
import Label from "./FormUtils/Label";
import TextField from "./FormUtils/TextField";

const ImperialForm = ({ handleBmi, handleIdealWeight }) => {
  const [formValues, setFormValues] = useState({
    ft: "",
    in: "",
    st: "",
    lbs: "",
  });

  const handleChange = (e) => {
    const actualValues = { ...formValues, [e.target.name]: e.target.value };
    setFormValues(actualValues);
    handleBmi(actualValues);
    handleIdealWeight(actualValues);
  };

  return (
    <section className=" md:col-span-2 grid grid-cols-2 gap-y-4">
      <div className="col-start-1 col-span-2 grid grid-cols-2">
        <Label text="Height" className="col-start-1 col-span-2" />
        <div className="col-span-2 grid grid-cols-2 gap-x-3">
          <TextField
            halfSize
            onChange={handleChange}
            metrical="ft"
            name="ft"
            value={formValues.ft}
            containerClassName="col-start-1"
          />
          <TextField
            halfSize
            onChange={handleChange}
            metrical="in"
            name="in"
            value={formValues.in}
            containerClassName="col-start-2"
          />
        </div>
      </div>
      <div className="col-start-1 col-span-2 grid grid-cols-2">
        <Label text="Weight" className="col-start-1 col-span-2" />
        <div className="col-span-2 grid grid-cols-2 gap-x-3">
          <TextField
            halfSize
            onChange={handleChange}
            metrical="st"
            name="st"
            value={formValues.st}
            containerClassName="col-start-1"
          />
          <TextField
            halfSize
            onChange={handleChange}
            metrical="lbs"
            name="lbs"
            value={formValues.lbs}
            containerClassName="col-start-2"
          />
        </div>
      </div>
    </section>
  );
};

export default ImperialForm;
