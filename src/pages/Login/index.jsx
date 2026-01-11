import { useEffect, useState } from "react";
import Button from "../../components/button/button";
import Input from "../../components/Input/input";
import { IoSunnySharp, IoMoon } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [mode, setMode] = useState();
  let navigate = useNavigate();
  const toogleTheme = () => {
    if (localStorage.getItem("theme") == "dark") {
      setMode("light");
      localStorage.theme = "light";
      setMode("light");
    } else {
      localStorage.theme = "dark";
      const desigin = document.getElementsByClassName("ripple")[0];
      desigin.classList.remove("animate-ripple");
      desigin.classList.add("animate-ripple");
      setMode("dark");
    }
    document.documentElement.classList.toggle("dark");
  };
  useEffect(() => {
    toogleTheme();
    console.log(window.matchMedia("(prefers-color-scheme: dark)"));
  }, []);
  console.log("mode", mode);
  const buttonHandler = () => {
    navigate("/verify-email");
  };
  return (
    <div className="h-screen flex flex-col">
      <button
        onClick={toogleTheme}
        className={`rounded-full  p-2 ml-auto block border  ${
          mode === "light" ? "  border-black bg-black " : " bg-white "
        }`}
      >
        {mode === "light" ? <IoMoon size={32} /> : <IoSunnySharp size={32} />}
      </button>
      <div className="flex flex-col gap-12  md:w-1/4 m-auto ">
        <h2 className="text-center ">Let's Get Started</h2>
        <Input placeholder="Email Id" />
        <Button label="Continue" onClick={buttonHandler} />
      </div>
    </div>
  );
};

export default Login;
