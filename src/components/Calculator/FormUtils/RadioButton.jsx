const RadioButton = ({ label, value, setIsSelected, containerClasses }) => {
  const isSelected = value === label;

  return (
    <div className={`flex items-center gap-[18px] ${containerClasses}`}>
      <span
        onClick={() => setIsSelected(label)}
        className={`w-[31px] h-[31px] cursor-pointer transition-all border-grey border-2 rounded-2xl ${
          !isSelected && "hover:border-blue"
        } ${isSelected && "border-0 ring-inset ring-8 ring-grey bg-blue"}`}
      />
      <label htmlFor="radiobtn" className="text-gunMetal body-m-bold">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
