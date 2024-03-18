import React from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  // eslint-disable-next-line no-unused-vars, no-undef
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // access to html element

  // set theme to localStorage and html element
  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });

  return (
    <div
      className='relative'
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <img
        src={LightButton}
        alt=''
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-300`}
      />
      <img src={DarkButton} alt='' className={`w-12 cursor-pointer `} />
    </div>
  );
};

export default DarkMode;
