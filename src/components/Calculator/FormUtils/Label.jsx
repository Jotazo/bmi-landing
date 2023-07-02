const Label = ({ text, ...props }) => {
  return (
    <label className={`body-s text-darkElectricBlue`} {...props}>
      {text}
    </label>
  );
};

export default Label;
