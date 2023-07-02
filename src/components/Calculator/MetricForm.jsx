import { useState } from "react";

import Label from "./FormUtils/Label";
import TextField from "./FormUtils/TextField";

const MetricForm = ({ handleBmi, handleIdealWeight }) => {
  const [formValues, setFormValues] = useState({
    kg: "",
    cm: "",
  });

  const handleChange = (e) => {
    const actualValues = { ...formValues, [e.target.name]: e.target.value };
    setFormValues(actualValues);
    handleBmi(actualValues);
    handleIdealWeight(actualValues);
  };

  return (
    <section className="grid grid-cols-2 col-start-1 col-span-2 gap-4">
      <div className="col-start-1 col-end-3 md:col-end-2">
        <Label text="Height" />
        <TextField
          metrical="cm"
          name="cm"
          value={formValues.cm}
          onChange={handleChange}
          type="number"
        />
      </div>
      <div className="col-span-2 md:col-start-2">
        <Label text="Weight" />
        <TextField
          metrical="kg"
          name="kg"
          value={formValues.weight}
          onChange={handleChange}
          type="number"
        />
      </div>
    </section>
  );
};

export default MetricForm;
