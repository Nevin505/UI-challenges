import {  useRef, useState } from "react";
import Input from "../../components/Input/input";

const OtpBox = () => {
  const [otp, setoTP] = useState(new Array(6));
  const inputRef = useRef([]);
  const onChange = (e, index) => {
    console.log("tfriuvber");
    const { value } = e.target;
    if (inputRef.current[index + 1] && inputRef.current[index].value) {
      console.log("asjbdhasj");

      inputRef.current[index + 1].focus();
      otp[index] = value;
    }
    console.log(inputRef);
  };

  const handleKEyDOwn = (e, index) => {
    if (e.key !== "Backspace") return;

    const currentInput = inputRef.current[index];

    // If input has value → let browser handle delete
    if (currentInput.value !== "") {
      return;
    }

    // If empty → move focus back
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
  };
  const addREf = (element, index) => {
    console.log("RAunning", element, index);

    inputRef.current[index] = element;
    console.log("inputRef", inputRef);
  };
  console.log("inputRef", inputRef);

  return (
    <div className="flex flex-col justify-center items-center mx-auto h-screen">
      <h1>Enter Otp</h1>
      <div className="flex justify-center items-end gap-4 mx-auto w-1/4">
        {[0, 1, 2, 3, 4, 5].map((_, index) => {
          return (
            <Input
              key={index}
              maxLength="1"
              name="box-1"
              ref={(element) => addREf(element, index)}
              className="box-1"
              onChange={(e) => onChange(e, index)}
              onKeyDown={(e) => handleKEyDOwn(e, index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OtpBox;
