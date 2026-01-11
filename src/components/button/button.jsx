const Button = ({ label, onClick, type = "button" }) => {
  return (
    <div>
      <button
        className="py-2 bg-slate-500 text-white w-full rounded-md"
        onClick={onClick}
        type={type}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
