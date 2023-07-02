import "./TextField.css";

const TextField = ({ metrical, halfSize, containerClassName, ...props }) => {
  return (
    <div
      className={`relative w-fit flex flex-col ${
        halfSize && "w-[46%]"
      } ${containerClassName}`}
    >
      <input
        placeholder="0"
        className={`w-full mt-2 outline-none border-borders border-2 rounded-xl py-5 px-6 text-gunMetal placeholder:text-borders focus:border-blue heading-m`}
        {...props}
      />
      <span className="absolute heading-m text-blue right-5 top-[30px]">
        {metrical}
      </span>
    </div>
  );
};

export default TextField;
