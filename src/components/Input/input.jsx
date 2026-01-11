const Input = ({
  placeholder,
  onChange,
  className,
  type = "text",
  ...props
}) => {
  return (
    <input
      className={`py-2 rounded-md bg-slate-100 w-full px-4 ${className}`}
      type={type}
      {...props}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
